import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
      // init firebase connection
      firebase.initializeApp(environment.firebaseConfig);
  }
}
