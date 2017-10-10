import { Component, OnInit } from '@angular/core';
import { CodeSpaceComponent } from '../code-space/code-space.component'
import { CodeSpace2Component } from '../code-space2/code-space2.component'
import { DisplaySpaceComponent } from '../display-space/display-space.component'
import { ApiService } from '../../service/api.service'

@Component({
  selector: 'app-work-space',
  templateUrl: './work-space.component.html',
  styleUrls: ['./work-space.component.css'],
  entryComponents:[CodeSpaceComponent,CodeSpace2Component]
})
export class WorkSpaceComponent implements OnInit {
  components:Array<any> = [ CodeSpaceComponent , CodeSpace2Component ]
  constructor( public apiService:ApiService ) { 

  }
  shows(){
    return [
      this.apiService.workSpace[0].files.length>0,
      this.apiService.workSpace[1].files.length>0
    ]
  }

  ngOnInit() {
  }

}
