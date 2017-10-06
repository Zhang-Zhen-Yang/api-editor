import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-monaco-space',
  templateUrl: './monaco-space.component.html',
  styleUrls: ['./monaco-space.component.css']
})
export class MonacoSpaceComponent implements OnInit, AfterViewInit {
  @ViewChild('code') codeSpace;
  @Input() value
    set (val){
      console.log(val);
    }
  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){

    window['loader']().then((monaco) => {
      let editor = monaco.editor.create(this.codeSpace.nativeElement, {
        value:this.value,
        language: 'javascript',
        //theme: 'vs-dark',
        automaticLayout: true
      })
    })
  }


}
