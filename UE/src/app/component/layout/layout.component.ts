/*
 * @Author: zhangzhenyang 
 * @Date: 2017-09-27 10:59:25 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2017-09-27 17:24:37
 */
//布局
import { Component, OnInit } from '@angular/core';
import {ResourceManagerComponent } from '../resource-manager/resource-manager.component'
import { WorkSpaceComponent } from '../work-space/work-space.component'
/*import { CodeSpaceComponent } from '../code-space/code-space.component'
import { DisplaySpaceComponent } from '../display-space/display-space.component'*/
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  resourcemanger:Array<any> =[ResourceManagerComponent,WorkSpaceComponent]
  //components:Array<any> = [ CodeSpaceComponent , DisplaySpaceComponent ]
  constructor() { }

  ngOnInit() {
  }

}
