import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as firebase from 'firebase/app';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  firstName:string = '';
  lastName:string = '';
  category:string = '';
  zipcode:number;
  reviews = [];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      firebase.database().ref('officials/' + params.uid).once('value', (snapshot) => {
        // set user variables
        this.firstName = snapshot.val().first;
        this.lastName = snapshot.val().last;
        this.category = snapshot.val().category;
        this.zipcode = snapshot.val().zip;
      }).catch((error) => console.log(error));
    });
  }

  ngOnInit() {
    environment.currentPage = 'review';
  }

}
