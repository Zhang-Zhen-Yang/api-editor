import { Component, OnInit, Input, ViewChild,AfterViewInit,OnChanges } from '@angular/core';
import { ApiService } from '../../service/api.service'
@Component({
  selector: 'app-image-space',
  templateUrl: './image-space.component.html',
  styleUrls: ['./image-space.component.css']
})
export class ImageSpaceComponent implements OnInit,AfterViewInit,OnChanges {
  @Input() src;
  @Input() sapceIndex
  @Input() activeIndex
  @Input() fileObj
  @ViewChild('webview') webview;
  constructor(public apiService:ApiService) { }

  ready = false
  ngOnInit() {
    
  }
  ngOnChanges(e){
    //console.log(e);
    if(e.fileObj){
      let activeFile = e.fileObj.currentValue;
      if(activeFile){
        this.render(activeFile);        
      } 
    }
  }
  ngAfterViewInit(){

    /*this.apiService.space[this.sapceIndex].subscribe((e)=>{
      let path = e['path'];//?e['path'].replace(/\\/g,'/'):'';

      let params = JSON.stringify({path:e['path']});
      switch(e['type']){
        //打开图片
        case 'image':
          //this.webview.nativeElement.executeJavaScript('openImage("'+path+'")');
          this.webview.nativeElement.send('setImage',path);
          break;
        //打开pdf
        case 'pdf':
          this.webview.nativeElement.executeJavaScript('openPdf("'+path+'")');
          break;
        //打开mp4,打开mp3
        case 'media':
          //this.webview.nativeElement.executeJavaScript('openMedia("'+path+'")');
          this.webview.nativeElement.send('setMedia',path);
          break;
        case 'text':
          this.webview.nativeElement.executeJavaScript('stop()');
          break;
        default :
          break;
      }
    })*/
    
    this.webview.nativeElement.addEventListener('dom-ready',()=>{
      this.ready = true;
      this.render(this.apiService.workSpace[this.sapceIndex].files[this.activeIndex]);
    })
    this.webview.nativeElement.addEventListener('ipc-message',(e)=>{
      switch (e.channel) {
        case 'click':
        this.apiService.workSpackActiveIndex = this.sapceIndex;
          break;          
        default:
          break;
      }

    })
  }

  render(activeFile){
    if(this.ready){
      switch(activeFile.type){
        case 'image':
          this.webview.nativeElement.send('setImage',activeFile['src']);
          break;
        case 'media':
          this.webview.nativeElement.send('setMedia',activeFile['src']);
          break;
        default :            
          break;
      }
    }
    
  }

}
