import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/empty'
import 'rxjs/add/observable/combineLatest'
import 'rxjs/add/observable/audit'
import 'rxjs/add/observable/throttle'
let path = window['path'],
    glob = window['glob'],
    fs = window['fs'];
@Injectable()
export class ApiService {  
  constructor() {
    //双击打开新的文件
    /*this.openTabSubject.subscribe((e)=>{
      console.log(e);
    })*/
    /*this.observables.fileClick = Observable.combineLatest(this.observables.fileSingleClick,this.observables.fileDblClick);
    this.observables.fileClick.subscribe((e)=>{
      console.log(e);
    })*/
    
    this.observables.fileClick.subscribe((e)=>{
      console.log(e);
    })

  }

  observables={
    fileClick:new Subject(),
    fileSingleClick:new Subject(),
    fileDblClick:new Subject()
  }

  /**
   * 工作目录
   */
  projectDir = null;

  /**
   * 打开软件时自动加载工作目录
   */
  initProjectDir(){
    let _this=this,dir = localStorage.getItem('projectDir');
    if(dir){
      fs.stat(dir,function(er,stat){
        if(er){
          console.error(er);
          return;
        }
        if(stat.isDirectory()){
          _this.projectDir = dir;     
          _this.readDir(dir,_this.files);
        }        
      })
      
    }
  }

  /**
   * 目录下的所有目录，文件
   */
  files:Array<any> = [];

  workSpackActiveIndex:number = 0
  workSpaceActive = [0,0]
  workSpace:Array<any> = [
    {
      open:true,
      files:[
        {
          active:true,
          fileName:'jj.js',
          type:'text',
          value:'let a = apple;',
          path:['aa','bb.js'],
          editor:null
        },
        {
          active:false,
          fileName:'jj.vue',
          value:'class fruit {}',
          type:'text',
          path:['cc','dd.html'],
          editor:null
        },
        {
          active:false,
          fileName:'jj.jpg',
          type:'image',
          src:'http://ww1.sinaimg.cn/large/006xin4Sgw1f6ngydeeedj31hc0u0e1x.jpg'
        } 
       
      ]
    },
    {
      open:true,
      files:[
        {
          active:true,
          type:'text',
          value:'let a = apple;',
          fileName:'jj.ts',
          path:['aa','bb.js'],
          editor:null
        },
        {
          active:true,
          type:'text',
          fileName:'jj.css',
          value:`public  class Bridge extends BridgeAbstrace{
            
                public Bridge(Worker worker) {
                    super(worker);
                }
            
                @Override
                void doBridge() {
                    worder.doword();
                }
            }`,
          path:['aa','bb.js'],
          editor:null
        }
      ]
    }
  ]

  workSapckRatios = [0.5,0.5]

  dispayArea=[{
    open:true,
    active:true,
    type:'code',
    url:'https://www.bilibili.com/'
  },{
    open:false,
    active:false,
    type:'display',
    url:'src/displayWebview.html'
  }]
  openedFile = null;
  openedFileType = null;
  openedFileWebview = null;

  firstSpace = new Subject();
  openTabSubject = new Subject();

  /**
   * 打开目录
   * @param callback 
   */
  openFile(callback){
    let _this = this;

    window['remote'].dialog.showOpenDialog({
      title:'请选择文件目录',
      properties: [ 'openDirectory', 'multiSelections']
    },function(filePaths){
      callback(filePaths);
      //this.getCurrentDirFiles(filePaths[0],result);
      _this.projectDir = filePaths[0];
      _this.readDir(filePaths[0],_this.files);
      localStorage.setItem('projectDir',filePaths[0]);
      /*let homePath = window['remote'].app.getPath('userData');
      console.log('userData ',homePath);*/
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

  /**
   * 读取目录
   * @param filePath 
   * @param fileList 
   */
  readDir(filePath,fileList){
    let _this = this;
    fs.readdir(filePath,function(er,files){
      if(er){
        console.error(er);
        return;
      }
      files.forEach((file)=>{
        let fullPath = path.join(filePath,file);
        fs.stat(fullPath,function(er,stat){
          if(er){
            console.error(er);
            return;
          }
          //console.log(stat);
          //如果是文件
          if(stat.isFile()){
            fileList.push({
              fullPath:fullPath,
              type:'file',
              name:file,
              opened:false
            })
          }
          //如果是目录
          if(stat.isDirectory()){
            let child = [];
            fileList.push({
              fullPath:fullPath,
              type:'dir',
              name:file,
              expanded:false,
              child:child
            })
            _this.readDir(path.join(filePath,file),child);
          }
        })
        //console.log(file);
      })
    })
  }

  /**
   * 展开收缩目录
   * @param pathIndex 
   */
  togglePath(pathIndex:Array<number>){

    let paths = this.files;
    pathIndex.forEach((pathIndex,index)=>{
      if(index==0){
        paths = paths[pathIndex];
      }else{
        paths = paths['child'][pathIndex];
      }      
    })
    //alert(JSON.stringify(paths));
    paths['expanded'] = !paths['expanded'];
  }

  /**
   * 读取文件
   */
  readFile(filePath){
    let fullPath = path.join.apply(null,[this.projectDir].concat(filePath)),fileName = filePath[filePath.length-1];
    this.openedFile = fullPath;
    //alert('打开文件'+fullPath);

    let imageExt:Array<string> = ['.jpg','.jpeg','.png','.gif','.tiff','ico','.svg'],
        mediaExt:Array<string> = ['.mp4','.mp3'],
        pdfExt:Array<string>=['.pdf'],
        action = 'openFile',
        type = 'text';
        this.openedFileType = 'file';
    imageExt.forEach((item)=>{
      if(fullPath.toLowerCase().endsWith(item)){
        action = 'openImage';
        this.openedFileType = 'image';
        type = 'image'
      }
    })
    pdfExt.forEach((item)=>{
      if(fullPath.toLowerCase().endsWith(item)){
        action = 'openPdf';
        this.openedFileType = 'pdf';
        type = 'pdf'
      }
    })
    mediaExt.forEach((item)=>{
      if(fullPath.toLowerCase().endsWith(item)){
        action = 'openMedia';
        this.openedFileType = 'media';
        type='media';
      }
    })

    if(action == 'openFile'){
      fs.stat(fullPath,(er,stat)=>{
        if(er){
          console.error(er);
          return;
        }
        if(stat.isFile()){
          if(stat.size > 1<<22){

          }else{
            fs.readFile(fullPath,'utf8',(err,str)=>{

              this.firstSpace.next({
                str:str,
                action:'stop',
                path:fullPath
              });
              if(this.workSpace[0].files[this.workSpaceActive[0]]){
                this.workSpace[0].files[this.workSpaceActive[0]]={
                  fileName:fileName,
                  type:type,
                  value:str,
                  path:fullPath
                }
              }
              
            })
          }          
        }else{
          
        }
      })
    }else{
      if(this.workSpace[0].files[this.workSpaceActive[0]]){
        this.workSpace[0].files[this.workSpaceActive[0]]={
          fileName:fileName,
          type:type,
          src:fullPath,
          path:fullPath
        }
      }
      this.firstSpace.next({
        action:action,
        path:fullPath
      });
    }    
  }



  /**
   * 目录投放
   * @param name 
   */
  dropDir(name){
    fs.stat(name,(er,stat)=>{
      if(er){
        console.error(er);
        return;
      }
      if(stat.isDirectory()){
        this.projectDir = name;
        localStorage.setItem('projectDir',name);
        this.files=[];
        this.readDir(name,this.files);
      }
      
    })
  }

  /**
   * 设置活动的代码区
   * @param workspackIndex 工作区索引
   * @param index 
   */
  setActiveFile(workspackIndex,index){
    this.workSpaceActive[workspackIndex] = index;
    if(this.workSpace[workspackIndex].files[index]&&this.workSpace[workspackIndex].files[index].type=='image'){
      console.log(this.workSpace[workspackIndex].files[index].src);
      this.firstSpace.next({
        action:'openImage',
        path:this.workSpace[workspackIndex].files[index].src
      });
    }
    this.setActiveSpaceIndex(workspackIndex);
    
  }

  /**
   * 设置工作区活动索引
   * @param index 
   */
  setActiveSpaceIndex(index){
    
    this.workSpackActiveIndex = index;
  }

  /**
   * 保存文件
   */
  saveFile(){

    let fileObj = this.workSpace[this.workSpackActiveIndex].files[this.workSpaceActive[this.workSpackActiveIndex]];
    //如果是文本文件
    if(fileObj.type == 'text'){
      fs.writeFile(fileObj.path,fileObj.editor.getValue(),'utf8',(er)=>{
        if(er){
          alert('保存失败');
          return;
        }
        alert('保存成功');
      })
    }

    //alert(this.workSpace[this.workSpackActiveIndex].files[this.workSpaceActive[this.workSpackActiveIndex]].fileName);

    /*if(this.openedFileWebview){
      console.log('ddd');
      this.openedFileWebview.executeJavaScript('getCode()',(str)=>{
        let file = this.openedFile;
        fs.writeFile(file,str,'utf8',()=>{
          alert('保存成功');
        })

      });
    }
    alert('保存文件');*/
  }

}
