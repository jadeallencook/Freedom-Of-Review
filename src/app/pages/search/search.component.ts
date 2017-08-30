import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as firebase from 'firebase/app';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchResultsArray:any;
  searchCategory: string;

  searchParams = {
    firstName: '',
    lastName: '',
    idNumber: '',
    zipcode: ''
  }

  constructor(private route: ActivatedRoute) {
    // get search type
    this.route.params.subscribe((params) => {
      this.searchCategory = params.type;
      this.queryDatabase();
    });
  }

  getCategory() {
    firebase.database().ref('officials').orderByChild('category').equalTo(this.searchCategory).once('value', (snapshot) => {
      if (snapshot.val() !== undefined && snapshot.val() !== null) {
        this.searchResultsArray = Object.keys(snapshot.val()).map(function(key) {
          let myObj = snapshot.val()[key];
          myObj.uid = key;
          return myObj;
        });
      } else {
        this.searchResultsArray = null;
      }
    }).catch((error) => console.log(error));
  }

  getAllOfficials() {
    firebase.database().ref('officials').once('value', (snapshot) => {
      if (snapshot.val() !== undefined && snapshot.val() !== null) {
        this.searchResultsArray = Object.keys(snapshot.val()).map(function(key) {
          let myObj = snapshot.val()[key];
          myObj.uid = key;
          return myObj;
        });
      } else {
        this.searchResultsArray = null;
      }
    }).catch((error) => console.log(error));
  }

  refineSearch() {
    this.searchResultsArray = this.searchResultsArray.map((result) => {
      if (result.first.toLowerCase().indexOf(this.searchParams.firstName.toLowerCase()) > -1 && result.last.toLowerCase().indexOf(this.searchParams.lastName.toLowerCase()) > -1 && result.id.toLowerCase().indexOf(this.searchParams.idNumber.toLowerCase()) > -1 && result.zip.toString().indexOf(this.searchParams.zipcode.toString()) > -1) return result;
    }).filter(function(result) {
       return result !== undefined;
    });
  }

  queryDatabase() {
    if (this.searchCategory && this.searchCategory !== 'all') this.getCategory();
    else this.getAllOfficials();
  }

  ngOnInit() {
    environment.currentPage = 'search';
  }

}
