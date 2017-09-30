import { Component, Input, OnInit, ViewChild, AfterViewInit,AfterContentInit,AfterContentChecked, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from '../../service/api.service'
@Component({
  selector: 'app-display-space',
  templateUrl: './display-space.component.html',
  styleUrls: ['./display-space.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class DisplaySpaceComponent implements OnInit,AfterViewInit,AfterContentChecked,AfterContentInit {
  @ViewChild('webview') webview;
  domReady:boolean=false
  constructor( public apiService:ApiService ) { }
  src(){
    let url = this.apiService.dispayArea[1].url;
    if(this.domReady){
      if(this.webview.nativeElement.get){

      }
      this.webview.nativeElement.loadURL(url);
    }
    return url;
  }
  ngOnInit() {

  }
  ngAfterViewInit(){
    console.log(this.webview);
     
  }
  ngAfterContentChecked(){
     //this.webview.nativeElement.loadURL('https://www.bilibili.com/');
  }
  ngAfterContentInit(){
    //this.webview.nativeElement.loadURL('http://www.acfun.cn/');
  }


}
