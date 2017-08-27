import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FirebaseAuthService } from '../../services/firebase-auth.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  email:string;
  password: string;

  constructor(private FirebaseAuthService: FirebaseAuthService) { }

  ngOnInit() {
    environment.currentPage = 'dashboard';
    this.FirebaseAuthService.errorMsg = '';
  }

}
