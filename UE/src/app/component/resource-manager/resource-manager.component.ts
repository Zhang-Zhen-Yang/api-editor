/*
 * @Author: zhangzhenyang 
 * @Date: 2017-09-27 17:29:00 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2017-09-28 11:22:48
 */
//资源管理器
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service'
@Component({
  selector: 'app-resource-manager',
  templateUrl: './resource-manager.component.html',
  styleUrls: ['./resource-manager.component.css']
})
export class ResourceManagerComponent implements OnInit {
  repeatArray = new Array(20);
  constructor(public apiService:ApiService) { 
  
  }

  ngOnInit() {
  }
  /**
   * 打开文件夹
   */
  openDirectory(){
    this.apiService.openFile(function(filePaths){
      console.log(filePaths);
    });
  }

}
