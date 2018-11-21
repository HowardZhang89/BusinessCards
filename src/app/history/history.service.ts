import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { AngularFireDatabase } from '@angular/fire/database';
import {formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { ReflectionCapabilities } from '@angular/core/src/reflection/reflection_capabilities';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  searchHistoryRef: any;
  searchHistory: any[];
  
  constructor(
    private loginService: LoginService,
    private db: AngularFireDatabase,
    ){
      this.searchHistory = [];
      this.searchHistoryRef = this.db.list(`currentSession/${this.loginService.userUid}/searches`);
  }

  getSearchHistory() {
    
    return this.searchHistory;
    //return this.searchHistoryRef.valueChanges();
  }

  /*addNameToSearchHistory(fName: string, lName: string){
    this.searchHistoryRef.push({firstName: fName, lastName: lName});
  }
  */

  addSearchToHistory(query: String){
    //this.searchHistoryRef.push(query);
    this.searchHistory.push(query);
    console.log(query); 
  }
}


  
  
