import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HistoryService } from './history.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  searchHistory: any[];
  
  constructor(private historyService: HistoryService) { 
  }

  ngOnInit() {
    this.getSearchHistory();
  }

  getSearchHistory(){
    this.historyService.getSearchHistory().subscribe((history: any)=>{
      this.searchHistory = history;
    })
  }

}
