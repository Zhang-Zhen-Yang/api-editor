import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service'

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  files:Array<any> = [];
  constructor(public apiService:ApiService) { 
    this.files = apiService.files;
  }

  ngOnInit() {
  }

  select(e){
    //this.apiService.readFile(e);
    console.log('s');
    this.apiService.observables.fileClick.next({
      type:'s',
      filePath:e,
      timeStemp:Date.now()
    });
  }

  dblSelect(e){
    console.log('d');
    this.apiService.observables.fileClick.next({
      type:'d',
      filePath:e,
      timeStemp:Date.now()
    });
    //this.apiService.readFile(e);
  }

}
