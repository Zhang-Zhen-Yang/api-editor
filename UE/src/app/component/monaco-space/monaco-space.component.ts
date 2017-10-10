import { Component, OnInit, ViewChild, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { ApiService } from '../../service/api.service'
@Component({
  selector: 'app-monaco-space',
  templateUrl: './monaco-space.component.html',
  styleUrls: ['./monaco-space.component.css']
})
export class MonacoSpaceComponent implements OnInit, AfterViewInit,OnDestroy {
  @Input() show:boolean;
  @Input() workspaceIndex:number;
  @Input() fileName:string;
  @Input() fileIndex:number;
  @Input() lang:string;

  @ViewChild('code') codeSpace;
  @Input() value
    set (val){
      console.log(val);
    }
  editor

  constructor(public apiService:ApiService) { }

  ngOnInit() {
    console.log('init');
  }

  ngAfterViewInit(){
    window['loader']().then((monaco) => {

      let lang;
      if(this.lang){
        lang = this.lang;
      }else{
        monaco.languages.getLanguages().forEach((item)=>{
          if(lang) return;
          item.extensions.forEach((ext)=>{
            if(this.fileName.endsWith(ext)){
              lang = item.id;
            }
          })
        })        
        lang = lang||'plaintext'
        this.apiService.workSpace[this.workspaceIndex].files[this.fileIndex].lang = lang;
      }      
      
      let editor = monaco.editor.create(this.codeSpace.nativeElement, {
        value:this.value,
        language: lang,
        //theme: 'vs-dark',
        automaticLayout: true
      })

      this.apiService.workSpace[this.workspaceIndex].files[this.fileIndex].editor = this.editor = editor;
      if(this.apiService.workSpace[this.workspaceIndex].files[this.fileIndex].viewState){    
        editor.setModel(this.apiService.workSpace[this.workspaceIndex].files[this.fileIndex].model);
        editor.restoreViewState(this.apiService.workSpace[this.workspaceIndex].files[this.fileIndex].viewState);
      }else{
        editor.onDidChangeModelContent((e)=>{        
          console.log(e);
          if(e.isRedoing){
            this.apiService.workSpace[this.workspaceIndex].files[this.fileIndex].modelChanges.push({versionId:e.versionId,action:'redoing'});
          }else if(e.isUndoing){
            this.apiService.workSpace[this.workspaceIndex].files[this.fileIndex].modelChanges.pop();
          }else {
            this.apiService.workSpace[this.workspaceIndex].files[this.fileIndex].modelChanges.push({versionId:e.versionId,action:'doing'});
          }
        })
      }
      if(this.apiService.workSpackActiveIndex == this.workspaceIndex){
        editor.focus();
      }  
      //监听内容改变
      
    })
  }

  ngOnDestroy(){
    if(
      this.editor&&
      this.apiService.workSpace[this.workspaceIndex].files[this.fileIndex]&&
      this.apiService.workSpace[this.workspaceIndex].files[this.fileIndex].editor&&
      this.editor.getId()== this.apiService.workSpace[this.workspaceIndex].files[this.fileIndex].editor.getId()
    ){
      this.apiService.workSpace[this.workspaceIndex].files[this.fileIndex].value = this.editor.getValue();
      this.apiService.workSpace[this.workspaceIndex].files[this.fileIndex].viewState = this.editor.saveViewState();
      this.apiService.workSpace[this.workspaceIndex].files[this.fileIndex].model = this.editor.getModel();
      //console.log(this.editor.getModel());

    }
  }
}
