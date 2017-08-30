import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  category:string = 'police';
  firstName:string;
  lastName:string;
  idNumber:any;
  zipcode:number;

  submitSuccess:boolean = false;

  environment = environment;

  writeUserData() {
    // check to make sure we have all needed info
    if (this.firstName && this.lastName && this.zipcode < 99999 && this.zipcode > 10000) {
      // default id number
      if (this.idNumber === undefined || this.idNumber.length < 0) this.idNumber = 'N/A'
      // create a key for the new post
      var newPostKey = firebase.database().ref().child('officials').push().key;
      // push the entry to the database
      firebase.database().ref('officials/' + newPostKey).set({
        category: this.category,
        first: this.firstName,
        last: this.lastName,
        id: this.idNumber,
        zip: this.zipcode
      }).then(() => {
        this.submitSuccess = true;
      }).catch((error) => console.log(error));
    } else {
      let allInputs = document.getElementsByClassName('form-control');
      for (var x = 0, max = allInputs.length; x < max; x++) {
        let input = <HTMLInputElement>allInputs[x];
        if (!input.value && input.id !== 'id-number') input.style.border = 'solid thin red';
        else input.style.border = 'solid thin #CCCCCC';
      }
    }
  }

  checkId(id) {
    if (id === undefined || id < 0) id = 'N/A'
    return id;
  }

  addAnother() {
    this.firstName = '';
    this.lastName = '';
    this.idNumber = '';
    this.submitSuccess = false;
  }

constructor() { }

ngOnInit() {
  environment.currentPage = 'submit';
}

}
