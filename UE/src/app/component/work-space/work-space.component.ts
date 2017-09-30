import { Component, OnInit } from '@angular/core';
import { CodeSpaceComponent } from '../code-space/code-space.component'
import { DisplaySpaceComponent } from '../display-space/display-space.component'

@Component({
  selector: 'app-work-space',
  templateUrl: './work-space.component.html',
  styleUrls: ['./work-space.component.css'],
  entryComponents:[CodeSpaceComponent,DisplaySpaceComponent]
})
export class WorkSpaceComponent implements OnInit {
  components:Array<any> = [ CodeSpaceComponent , DisplaySpaceComponent ]
  constructor() { 

  }

  ngOnInit() {
  }

}
