import { Component, OnInit } from '@angular/core';
import { CodeSpaceComponent } from '../code-space/code-space.component'
import { CodeSpace2Component } from '../code-space2/code-space2.component'
import { DisplaySpaceComponent } from '../display-space/display-space.component'

@Component({
  selector: 'app-work-space',
  templateUrl: './work-space.component.html',
  styleUrls: ['./work-space.component.css'],
  entryComponents:[CodeSpaceComponent,CodeSpace2Component]
})
export class WorkSpaceComponent implements OnInit {
  components:Array<any> = [ CodeSpaceComponent , CodeSpace2Component ]
  constructor() { 

  }

  ngOnInit() {
  }

}
