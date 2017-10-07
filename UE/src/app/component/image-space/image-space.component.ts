import { Component, OnInit, Input, ViewChild,AfterViewInit } from '@angular/core';
import { ApiService } from '../../service/api.service'
@Component({
  selector: 'app-image-space',
  templateUrl: './image-space.component.html',
  styleUrls: ['./image-space.component.css']
})
export class ImageSpaceComponent implements OnInit,AfterViewInit {
  @Input() src;
  @Input() sapceIndex;
  @ViewChild('webview') webview;
  constructor(public apiService:ApiService) { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    this.apiService.firstSpace.subscribe((e)=>{
      let path = e['path'].replace(/\\/g,'/');
      switch(e['action']){
        //打开图片
        case 'openImage':
          this.webview.nativeElement.executeJavaScript('openImage("'+path+'")');
          break;
        //打开pdf
        case 'openPdf':
          this.webview.nativeElement.executeJavaScript('openPdf("'+path+'")');
          break;
        //打开mp4,打开mp3
        case 'openMedia':
          this.webview.nativeElement.executeJavaScript('openMedia("'+path+'")');
          break;
        case 'stop':
          this.webview.nativeElement.executeJavaScript('stop()');
          break;
        default :
          break;
      }
    })
  }

}
