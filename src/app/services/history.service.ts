import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  imageHistory:any[];
  constructor() { }
  setKeywords(keyword:String){
    this.imageHistory.push(keyword);
  }
  getKeywords(){
    return this.imageHistory;
  }
}
