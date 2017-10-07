import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tree-file',
  templateUrl: './tree-file.component.html',
  styleUrls: ['./tree-file.component.css']
})
export class TreeFileComponent implements OnInit {
  @Input() title;
  @Input() fileName
  @Input() indent:number
  @Output() dblFileSelect = new EventEmitter()
  @Output() fileSelect = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  /**
   * 单击选择文件
   */
  clickFile(){
    let fileName = this.fileName;
    this.fileSelect.emit([fileName]);
  }
  /**
   * 双击选择文件
   */
  dblclickFile(){
    //console.log('dbl');
    let fileName = this.fileName;
    this.dblFileSelect.emit([fileName]);
  }
  select(e){
    let emitArray = e;
    e.unshift(this.fileName);
    this.fileSelect.emit(emitArray);
  }
  dblSelect(e){
    let emitArray = e;
    e.unshift(this.fileName);
    this.dblFileSelect.emit(emitArray);
  }

}
