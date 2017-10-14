import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../service/api.service'
@Component({
  selector: 'tree-dir',
  templateUrl: './tree-dir.component.html',
  styleUrls: ['./tree-dir.component.css']
})
export class TreeDirComponent implements OnInit {
  @Input() title;
  @Input() dirName;
  @Input() expanded:boolean;
  @Input() child:Array<any>;
  @Input() indent:number;
  @Input() index:number;
  @Input() paths:Array<string>;
  @Input() pathsIndexs:Array<number>
  @Output() fileSelect = new EventEmitter();
  @Output() dblFileSelect = new EventEmitter();
  constructor(public apiService:ApiService) { }

  ngOnInit() {

  }
  select(e){
    let emitArray = e;
    emitArray.unshift(this.dirName);
    this.fileSelect.emit(emitArray);
  }
  dblSelect(e){
    let emitArray = e;
    e.unshift(this.dirName);
    this.dblFileSelect.emit(emitArray);
  }
  //展开 收缩目录
  toggleExpand($event){
    this.apiService.togglePath(this.nextPathIndexs());
  }
  nextPath(){
    return this.paths.concat([this.dirName])
  }
  nextPathIndexs(){
    return this.pathsIndexs.concat([this.index])
  }
  showContextMenu(){
    this.apiService.dirContextMenuShow({title:this.title});
  }

}
