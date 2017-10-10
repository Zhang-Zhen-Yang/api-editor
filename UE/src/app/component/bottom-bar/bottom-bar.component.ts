import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service'
@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {
  lang:Array<any>
  constructor( public apiService:ApiService ) {

  }

  ngOnInit() {
    window['loader']().then((monaco) => {
      //console.log(monaco.languages.getLanguages());
      this.lang = monaco.languages.getLanguages();
    })
  }
}
