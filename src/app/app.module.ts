import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { HttpClientModule } from '@angular/common/http';

import { firebaseConfig } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

import { LoginService } from './login/login.service';
import { WikiService } from './wiki.service';
import { AppRoutingModule } from './app-routing.module';

import {AuthGuard} from './login/auth.guard';
import { TranslateService } from './translate.service';
import { HistoryService } from './history/history.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoginService, AuthGuard, WikiService, TranslateService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
