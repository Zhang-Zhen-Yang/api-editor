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

  textType(){
    let activeFile = this.apiService.workSpace[this.apiService.workSpackActiveIndex].files[this.apiService.workSpaceActive[this.apiService.workSpackActiveIndex]];
    return activeFile&&activeFile.type=='text';
  }
  mediaType(){
    let activeFile = this.apiService.workSpace[this.apiService.workSpackActiveIndex].files[this.apiService.workSpaceActive[this.apiService.workSpackActiveIndex]];
    return activeFile&&activeFile.type!='text';
  }

}
