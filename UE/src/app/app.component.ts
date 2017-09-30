import { Component,OnInit } from '@angular/core';
import { ApiService } from './service/api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private apiService:ApiService){
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
  ngOnInit(){
    this.apiService.initProjectDir();

    //注册键盘事件
    document.addEventListener('keydown',function(e){
      switch(e.key){
        //保存
        case 's':
          if(e.ctrlKey) console.log('保存');
        break;
        //打开文件
        case 'o':
          if(e.ctrlKey) console.log('打开文件');
        break;
        default :
          break;
      }
      console.log(e);
    })

    document.addEventListener('dragover',function(e){
      e.preventDefault();
    })
    //注册投放事件
    document.addEventListener('drop',function(e){
      e.preventDefault();
      //e.stopPropagation();
      console.log(e);
      for(let i in e.dataTransfer.files){
        e.dataTransfer.files[i]
      }
        
      });
    },false)

  }
  keydown(e){
    console.log(e);
  }
  click(e){
    console.log('click');
  }
  
  
}
