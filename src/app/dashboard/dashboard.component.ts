import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {HistoryComponent} from '../history/history.component';
import { WikiService } from '../wiki.service';
import { TranslateService } from '../translate.service';
import { HistoryService } from '../history/history.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

 
  searchInput: String;  // input comes from FormsModule
  wikiResults: any[];
  translateResults: any[];
  
  constructor(//private historyService: HistoryService, 
              private wikiService: WikiService,
              private translateService: TranslateService,
              private historyService: HistoryService,)
              //private router: Router,)
  { 
    this.searchInput ='';
    this.wikiResults = [];
    this.translateResults = [];
  }

  search(){
    this.historyService.addSearchToHistory(this.searchInput);
    this.wikiService.searchWiki(this.searchInput).subscribe(results => this.wikiResults = results);
    //this.giphyService.searchGiphy(this.searchInput).subscribe(results => this.giphyResults = results);
  }

  ngOnInit() {
  }
}
