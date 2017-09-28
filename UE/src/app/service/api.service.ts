import { Injectable } from '@angular/core';
let path = window['path'],
    glob = window['glob'],
    fs = window['fs'];
@Injectable()
export class ApiService {  
  constructor() { }
  projectDir = null
  files:Array<any> = ['ddddd'];
  /**
   * 打开目录
   * @param callback 
   */
  openFile(callback){
    let _this = this;
    window['remote'].dialog.showOpenDialog({
      title:'请选择文件',
      properties: ['openFile', 'openDirectory', 'multiSelections']
    },function(filePaths){
      callback(filePaths);
      //this.getCurrentDirFiles(filePaths[0],result);
      _this.projectDir = filePaths[0];
      _this.readDir(filePaths[0],_this.files);
      console.log(_this.files);
      setTimeout(()=>{
        console.log(_this.files);
      },2000)
    });
  }

  getCurrentDirFiles(filePath,result){
    glob(path.join(filePath,'*'),function(er,files){
      if(er){
        throw er;
      }
      console.log(files);
    })
  }

  readDir(filePath,fileList){
    let _this = this;
    fs.readdir(filePath,function(er,files){
      if(er){
        console.error(er);
        return;
      }
      files.forEach((file)=>{
        fs.stat(path.join(filePath,file),function(er,stat){
          if(er){
            console.error(er);
            return;
          }
          if(stat.isFile()){
            fileList.push({
              type:'file',
              name:file
            })
          }
          if(stat.isDirectory()){
            let child = [];
            fileList.push({
              type:'dir',
              name:file,
              child:child
            })
            _this.readDir(path.join(filePath,file),child);
          }
        })
        //console.log(file);
      })
    })
  }

}
