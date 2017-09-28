import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tree-dir',
  templateUrl: './tree-dir.component.html',
  styleUrls: ['./tree-dir.component.css']
})
export class TreeDirComponent implements OnInit {
  @Input() dirName;
  @Input() child:Array<any>;
  @Output() fileSelect = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  select(e){
    let emitArray = e;
    emitArray.unshift(this.dirName);
    this.fileSelect.emit(emitArray);
    alert('current-dir:'+this.dirName+';total'+emitArray);
  }

}
