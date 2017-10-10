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

    //初始化项目
    this.apiService.initProjectDir();

    //初始化菜单
    this.apiService.initMenu();

    //注册键盘事件
    document.addEventListener('keydown',(e)=>{
      switch(e.key){
        //保存
        case 's':
          if(e.ctrlKey){
            console.log(e);            
            this.apiService.saveFile();           
          }
        break;
        //打开文件
        case 'o':
          if(e.ctrlKey) console.log('打开文件');
        break;
        default :
          break;
      }
      
    })

    const holder = document;
    holder.ondragover = () => {
      return false;
    }
    holder.ondragleave = holder.ondragend = () => {
      return false;
    }
    holder.ondrop = (e) => {
      e.preventDefault()
      let firstFile = ''
      for (let f in e.dataTransfer.files) {
        if((e.dataTransfer.files[f] as any).path){
          firstFile = (e.dataTransfer.files[f] as any).path
        }
      }
      if(firstFile){
        this.apiService.dropDir(firstFile);
      }
      console.log(e);
      return false;
    }





  
  }
  keydown(e){
    console.log(e);
  }
  click(e){
    console.log('click');
  }
  
  
}
