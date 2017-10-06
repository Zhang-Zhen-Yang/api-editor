import { Component,ViewChild, OnInit,AfterViewInit,AfterContentChecked,AfterContentInit } from '@angular/core';
import { ApiService } from '../../service/api.service'
@Component({
  selector: 'app-code-space',
  templateUrl: './code-space.component.html',
  styleUrls: ['./code-space.component.css']
})
export class CodeSpaceComponent implements OnInit,AfterViewInit,AfterContentChecked,AfterContentInit {
  @ViewChild('webview') webview;
  
  constructor(public apiService:ApiService) {
      
  }
  ngOnInit() {
  }
  ngAfterViewInit(){
    //this.apiService.openedFileWebview = this.webview.nativeElement;
    //订阅
    /*this.apiService.firstSpace.subscribe((e)=>{
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
    })*/
    
  }

  ngAfterContentChecked(){
    //console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(){
  }

  dismiss(index){
    alert('dismiss'+index);
  }
  selectFile(i){
    this.apiService.workSpaceActive[0] = i;
    //alert('select'+i);
  }

}
