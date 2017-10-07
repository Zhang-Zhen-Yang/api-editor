import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { ApiService } from '../../service/api.service'
@Component({
  selector: 'app-monaco-space',
  templateUrl: './monaco-space.component.html',
  styleUrls: ['./monaco-space.component.css']
})
export class MonacoSpaceComponent implements OnInit, AfterViewInit {
  @Input() show:boolean;
  @Input() workspaceIndex:number;
  @Input() fileIndex:number;
  @ViewChild('code') codeSpace;
  @Input() value
    set (val){
      console.log(val);
    }
  constructor(public apiService:ApiService) { }

  ngOnInit() {
    console.log('init');
  }

  ngAfterViewInit(){

    window['loader']().then((monaco) => {
      let editor = monaco.editor.create(this.codeSpace.nativeElement, {
        value:this.value,
        language: 'javascript',
        //theme: 'vs-dark',
        automaticLayout: true
      })
      this.apiService.workSpace[this.workspaceIndex].files[this.fileIndex].editor = editor;
      editor.focus();
    })

  }


}
