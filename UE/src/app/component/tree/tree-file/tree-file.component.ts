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
  @Output() fileSelect = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  clickFile(){
    let fileName = this.fileName
    this.fileSelect.emit([fileName]);
  }
  select(e){
    let emitArray = e;
    e.unshift(this.fileName);
    this.fileSelect.emit(emitArray);
  }

}
