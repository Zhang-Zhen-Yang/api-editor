import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-tab',
  templateUrl: './file-tab.component.html',
  styleUrls: ['./file-tab.component.css']
})
export class FileTabComponent implements OnInit {
  @Input() active:boolean;
  @Output('dismiss') dismissClick = new EventEmitter();
  @Output() selectFile = new EventEmitter();
  constructor() { }

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

}
