import { Component, OnInit,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-code-space',
  templateUrl: './code-space.component.html',
  styleUrls: ['./code-space.component.css']
})
export class CodeSpaceComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit(){
    let webView = document.getElementById('webview');
    //webViewContent = webView['getWebContents']();
    //webViewContent.style.height = '500px';
    /*alert('afterInit');
    setTimeout(()=>{
      alert('123');
      let title = webView['getTitle']();
      webView['executeJavaScript']('editor.layout();');
      alert(title);
    },5000)*/

  }

}
