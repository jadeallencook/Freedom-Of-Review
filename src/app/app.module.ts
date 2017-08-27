import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from 'environments/environment'
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseAuthService } from './services/firebase-auth.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ReviewComponent } from './pages/review/review.component';
import { SubmitComponent } from './pages/submit/submit.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'submit', component: SubmitComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'search/:type', component: SearchComponent },
  { path: '**', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    ReviewComponent,
    SubmitComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    FirebaseAuthService,
    {
      provide: APP_BASE_HREF,
      useValue : ''
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
