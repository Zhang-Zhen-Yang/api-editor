import { Component,ViewChild, OnInit,AfterViewInit } from '@angular/core';
import { ApiService } from '../../service/api.service'
@Component({
  selector: 'app-code-space',
  templateUrl: './code-space.component.html',
  styleUrls: ['./code-space.component.css']
})
export class CodeSpaceComponent implements OnInit,AfterViewInit {
  @ViewChild('webview') webview;
  constructor(public apiService:ApiService) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.apiService.firstSpace.subscribe((e)=>{
      let path = e['path'].replace(/\\/g,'/');
      switch(e['action']){
        //打开文本文件
        case 'openFile':
          let delimiter = Date.now()+Math.random(), 
            execStr = encodeURI(e['str']);
          try{
            this.webview.nativeElement.executeJavaScript('openFile("'+execStr+'")');
          }catch(e){
            console.log(e);
          }          
          break;
        //打开图片
        case 'openImage':
          this.webview.nativeElement.executeJavaScript('openImage("'+path+'")');
          break;
        //打开图片
        case 'openPdf':
          this.webview.nativeElement.executeJavaScript('openPdf("'+path+'")');
        break;
        //打开mp4,打开mp3
        case 'openMedia':
          this.webview.nativeElement.executeJavaScript('openMedia("'+path+'")');
        break;
        default :
          break;
      }
      //console.log(e);
    })
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
