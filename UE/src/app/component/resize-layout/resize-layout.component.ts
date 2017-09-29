/*
 * @Author: zhangzhenyang 
 * @Date: 2017-09-27 10:58:03 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2017-09-27 17:11:51
 */
//调整左右上下占比 组件
import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ViewChild, ComponentFactoryResolver,ElementRef } from '@angular/core';
import { HostDirective } from './host.directive'
import { DisplayWiewHostDirective } from './display-wiew-host.directive'

enum resizeDirection{
  vertical,
  horizontal
}

@Component({
  selector: 'app-resize-layout',
  templateUrl: './resize-layout.component.html',
  styleUrls: ['./resize-layout.component.css']
})
export class ResizeLayoutComponent implements OnInit,AfterViewInit {
  @ViewChild(HostDirective) host;
  @ViewChild(DisplayWiewHostDirective) displayHost;

  @Input() direction:resizeDirection;
  @Input() components:Array<any>;
  @Input() ratio:Array<any>;
  @Input() delivery_type:string;
  @Output() setRatio = new EventEmitter<any>();

  resizeOn:boolean = false;
  pageX:number = 0;
  currentPageX:number = 0;

  ratios:Array<any>;
  prevRatios:Array<number> = [0.5,0.5];

  constructor( private componentFactoryResolver:ComponentFactoryResolver, private elememtRef:ElementRef ) {
    console.log(elememtRef.nativeElement.offsetWidth);
    
  }

  ngOnInit() {
    this.ratios = JSON.parse(JSON.stringify(this.ratio));
  }
 
  ngAfterViewInit(){
    
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.components[0]);
    this.host.viewContainerRef.clear();
    this.host.viewContainerRef.createComponent(componentFactory);

    let componentFactory1 = this.componentFactoryResolver.resolveComponentFactory(this.components[1]);
    this.displayHost.viewContainerRef.clear();
    let componentRef  = this.displayHost.viewContainerRef.createComponent(componentFactory1);
    componentRef.instance.src = 'aaaaaaa';
    alert(typeof this.components[1]);
    /*setTimeout(()=>{
      for(let i in this.elememtRef){
        console.log(i,this.elememtRef[i]);
      };
    },2000)*/
    
  }

  ratioStyle(){
    if(this.ratios&&this.delivery_type){
      if(this.delivery_type=='ratio'){
        return [this.ratios[0].value*100+'%',this.ratios[1].value*100+'%']
      }
      if(this.delivery_type=='firstFixed'){
        return [this.ratios[0].value+'px',`calc( 100% - ${this.ratios[0].value}px)`]
      }
      if(this.delivery_type=='secondFixed'){
        return [`calc( 100% - ${this.ratios[1].value}px)`,this.ratios[1].value+'px']
      }
    }
    return ['50%','50%']
  }
  /**
   * 开始调整占比
   * @param e 
   */
  resizeStart(e){
    //console.log(e);
    this.resizeOn = true;
    this.pageX = e.pageX;
    this.prevRatios[0] = this.ratios[0]['value'];
    this.prevRatios[1] = this.ratios[1]['value'];
  }

  mousemove(e){
    if(this.resizeOn){
      this.currentPageX = e.pageX;
      let pxChange =  this.currentPageX - this.pageX,
        ratioChange = (pxChange)/this.elememtRef.nativeElement.offsetWidth;

        if(this.delivery_type=='ratio'){
          this.ratios[0]['value'] = this.prevRatios[0] + ratioChange;
          this.ratios[1]['value'] = this.prevRatios[1] - ratioChange;
        }
        if(this.delivery_type=='firstFixed'){
          this.ratios[0]['value'] = this.prevRatios[0] + pxChange;
        }
        if(this.delivery_type=='secondFixed'){
          this.ratios[1]['value'] = this.prevRatios[1] - pxChange;
        }
      
    }
  }

  mouseup(e){
    this.resizeOn = false;
  }

}
