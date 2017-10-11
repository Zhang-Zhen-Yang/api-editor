import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../service/api.service'
@Component({
  selector: 'app-file-tab',
  templateUrl: './file-tab.component.html',
  styleUrls: ['./file-tab.component.css']
})
export class FileTabComponent implements OnInit {
  @Input() active:boolean;
  @Input() fileName:string;
  @Input() modelChanges:Array<any>
  @Input() workspaceIndex:number
  @Input() fileIndex:number

  @Output('dismiss') dismissClick = new EventEmitter();
  @Output() selectFile = new EventEmitter();
  constructor( public apiService:ApiService ) { }

  ngOnInit() {
  }

  /**
   * 关闭文件
   * @param e 
   */
  dismiss(e){
    e.stopPropagation();
    this.dismissClick.emit();
  }

  setFileActive(){
    this.selectFile.emit();
  }
  changes(){
    if(this.modelChanges){
      return this.modelChanges.length;
    }
    return null;
  }
  contextmenu(e){
    this.apiService.fileTabContextMenuShow(this.workspaceIndex,this.fileIndex);
  }

}
