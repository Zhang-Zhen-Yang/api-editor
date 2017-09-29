import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(){
    /*if(!String.prototype.endsWith){
      String.prototype.endsWith = function(val):boolean{
        if(this.lastIndexOf(val)<0){
          return false;
        }        
        return this.lastIndexOf(val)+val.length == this.length;
      }
    }*/
  }
  title = 'app';
  
  
}
