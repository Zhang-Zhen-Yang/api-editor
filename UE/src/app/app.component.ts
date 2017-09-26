import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  ngAfterViewInit(){
    let webView = document.getElementById('webview');
    //webViewContent = webView['getWebContents']();
    //webViewContent.style.height = '500px';
    alert('afterInit');
    setTimeout(()=>{
      alert('123');
      let title = webView['getTitle']();
      webView['executeJavaScript']('editor.layout();');
      alert(title);
    },5000)

    

  }
  
}
