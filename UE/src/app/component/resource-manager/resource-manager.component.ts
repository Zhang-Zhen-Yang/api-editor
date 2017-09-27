/*
 * @Author: zhangzhenyang 
 * @Date: 2017-09-27 17:29:00 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2017-09-27 17:56:32
 */
//资源管理器
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-manager',
  templateUrl: './resource-manager.component.html',
  styleUrls: ['./resource-manager.component.css']
})
export class ResourceManagerComponent implements OnInit {
  repeatArray = new Array(200);
  constructor() { }

  ngOnInit() {
  }

}
