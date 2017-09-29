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
    let emitArray = e;
    alert('tree:'+e);
  }

}