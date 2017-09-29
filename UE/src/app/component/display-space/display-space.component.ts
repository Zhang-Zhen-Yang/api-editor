import { Component, Input, OnInit, ViewChild, AfterViewInit,AfterContentChecked, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from '../../service/api.service'
@Component({
  selector: 'app-display-space',
  templateUrl: './display-space.component.html',
  styleUrls: ['./display-space.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class DisplaySpaceComponent implements OnInit,AfterViewInit,AfterContentChecked {
  @ViewChild('webview') webview;
  @Input() src
  constructor( public apiService:ApiService ) { }
  /*src(){
    return this.apiService.dispayArea[1].url;
  }*/
  ngOnInit() {

  }
  ngAfterViewInit(){
    console.log(this.webview);
     
  }
  ngAfterContentChecked(){
    //this.webview.nativeElement.loadURL('https://www.bilibili.com/');   
  }

}
