import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'

import { DialogService } from './dialog.service'
import 'rxjs/add/operator/debounceTime'
//import 'rxjs/add/operator/empty'
//import 'rxjs/add/observable/combineLatest'
//import 'rxjs/add/observable/audit'
import 'rxjs/add/operator/throttle';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/debounceTime'
let path = window['path'],
    glob = window['glob'],
    fs = window['fs'];
@Injectable()
export class ApiService {
  languages:Array<any>
  constructor(public dialog:DialogService) {
    //双击打开新的文件
    /*this.openTabSubject.subscribe((e)=>{
      console.log(e);
    })*/
    /*this.observables.fileClick = Observable.combineLatest(this.observables.fileSingleClick,this.observables.fileDblClick);
    this.observables.fileClick.subscribe((e)=>{
      console.log(e);
    })*/
    let d = this;
    this.observables.fileClick.debounceTime(200).subscribe((e)=>{
      switch(e['type']){
        //单击
        case 's':
          d.readFile(e['filePath'],'single');
          break;
        //双击
        case 'd':
          d.readFile(e['filePath'],'double');
          break;
        default:;
      }
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
   * 初始化菜单
   */
  initMenu(){
    let { Menu, MenuItem, shell} = window['remote'],_this = this;
    const template = [
      {
        label:'文件(F)',
        submenu:[
          {
            label:'打开文件',
            click(){ alert('打开文件') }
          },
          {
            label:'打开文件夹',
            click(){ _this.openFile(()=>{
              console.log('通过菜单打单文件夹');
            })}
          },
          {type: 'separator'},
          {
            label:'新建项目',
            click(){ _this.createNewProject() }
          },
          {type: 'separator'},

          {
            label:'保存',
            role:'save',
            click(){ alert('保存') }
          },
          {
            label:'另存为',
            click(){ alert('另存为') }
          },
          {
            label:'全部保存',
            click(){ alert('全部保存') }
          },
          {type: 'separator'},

          {
            label:'退出',
            role:'close',
            click(){ alert('退出') }
          },
        ]
      },
      {
        label: 'Edit',
        submenu: [
          {role: 'undo'},
          {role: 'redo'},
          {type: 'separator'},
          {role: 'cut'},
          {role: 'copy'},
          {role: 'paste'},
          {role: 'pasteandmatchstyle'},
          {role: 'delete'},
          {role: 'selectall'}
        ]
      },
      {
        label: 'View',
        submenu: [
          {role: 'reload'},
          {role: 'forcereload'},
          {role: 'toggledevtools'},
          {type: 'separator'},
          {role: 'resetzoom'},
          {role: 'zoomin'},
          {role: 'zoomout'},
          {type: 'separator'},
          {role: 'togglefullscreen'}
        ]
      },
      {
        role: 'window',
        submenu: [
          {role: 'minimize'},
          {role: 'close'}
        ]
      },
      {
        role: 'help',
        submenu: [
          {
            label: 'Learn More',
            click () { shell.openExternal('https://electron.atom.io') }
          }
        ]
      }
    ]
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }


  createNewProject(){
    alert('createNewProject');
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
          pathArray:['aa','bb.js'],
          editor:null,
          viewState:null,
          model:null,
          lang:null,
          modelChanges:[]
        },
        {
          active:false,
          fileName:'jj.vue',
          value:'class fruit {}',
          type:'text',
          path:['cc','dd.html'],
          pathArray:['cc','dd.html'],
          editor:null,
          viewState:null,
          model:null,
          modelChanges:[],
          lang:null
        },
        {
          active:false,
          fileName:'jj.jpg',
          pathArray:['jj.jpg'],
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
          editor:null,
          viewState:null,
          model:null,
          modelChanges:[],
          lang:null
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
          editor:null,
          viewState:null,
          model:null,
          modelChanges:[],
          lang:null
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

  space=[new Subject(),new Subject()]
  firstSpace = new Subject();
  openTabSubject = new Subject();

  /**
   * 打开目录
   * @param callback 
   */
  openFile(callback){
    let _this = this;

    window['remote'].dialog.showOpenDialog(
    window['remote'].getCurrentWindow(),
    {
      title:'请选择文件目录',
      properties: [ 'openDirectory', 'multiSelections']
    },function(filePaths){
      callback(filePaths);
      //this.getCurrentDirFiles(filePaths[0],result);
      if(!filePaths){
        return;
      }
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
  readFile(filePath,openType){

    let fullPath = path.join.apply(null,[this.projectDir].concat(filePath)),fileName = filePath[filePath.length-1];
    this.openedFile = fullPath;
    //alert('打开文件'+fullPath);

    if(this.checkReclick(filePath,openType)){
      return;
    }

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

    //打开文本文件
    if(action == 'openFile'){
      fs.stat(fullPath,(er,stat)=>{
        if(er){
          console.error(er);
          return;
        }
        if(stat.isFile()){
          //如果文件大于 4mb
          if(stat.size > 1<<22){
            alert('文件大于4mb');
          }else{
            fs.readFile(fullPath,'utf8',(err,str)=>{
              
              //如果单击打开文件
              if(
                  openType == 'single'&&(
                    this.workSpace[this.workSpackActiveIndex].files[this.workSpaceActive[this.workSpackActiveIndex]].type!='text'||
                    this.workSpace[this.workSpackActiveIndex].files[this.workSpaceActive[this.workSpackActiveIndex]].modelChanges.length==0)
                  ){
                if(this.workSpace[this.workSpackActiveIndex].files[this.workSpaceActive[this.workSpackActiveIndex]]){
                  this.workSpace[this.workSpackActiveIndex].files[this.workSpaceActive[this.workSpackActiveIndex]]={
                    fileName:fileName,
                    type:type,
                    value:str,
                    path:fullPath,
                    pathArray:filePath,
                    editor:null,
                    viewState:null,
                    model:null,
                    modelChanges:[]
                  }
                  this.space[this.workSpackActiveIndex].next({
                    str:str,
                    type:type,
                    action:'stop',
                    path:fullPath
                  })

                }
              }
              //如果是双击打开文件
              else /*if(openType == 'double')*/{

                this.workSpace[this.workSpackActiveIndex].files.push(
                  {
                    fileName:fileName,
                    type:type,
                    value:str,
                    path:fullPath,
                    pathArray:filePath,
                    editor:null,
                    viewState:null,
                    model:null,
                    modelChanges:[]
                  }
                )
                this.workSpaceActive[this.workSpackActiveIndex] = this.workSpace[this.workSpackActiveIndex].files.length - 1;
                this.space[this.workSpackActiveIndex].next({
                  str:str,
                  action:'stop',
                  path:fullPath,
                  type:type
                })        
              }              
              
            })
          }          
        }else{
          
        }
      })
    }else{

      if(openType == 'single'){
        if(this.workSpace[this.workSpackActiveIndex].files[this.workSpaceActive[this.workSpackActiveIndex]]){
          this.workSpace[this.workSpackActiveIndex].files[this.workSpaceActive[this.workSpackActiveIndex]]={
            fileName:fileName,
            type:type,
            src:fullPath,
            pathArray:filePath,
            path:fullPath
          }
          /*this.firstSpace.next({
            action:action,
            path:fullPath
          });*/
          this.space[this.workSpackActiveIndex].next({
            action:action,
            path:fullPath,
            type:type
          })
        }
      }else if(openType == 'double'){

        this.workSpace[this.workSpackActiveIndex].files.push({
          fileName:fileName,
          type:type,
          src:fullPath,
          pathArray:filePath,
          path:fullPath
        })
        this.workSpaceActive[this.workSpackActiveIndex] = this.workSpace[this.workSpackActiveIndex].files.length - 1;
        /*this.firstSpace.next({
          action:action,
          path:fullPath
        });*/
        this.space[this.workSpackActiveIndex].next({
          action:action,
          path:fullPath,
          type:type
        })
      }
    }    
  }

  checkReclick(filePath,openType):boolean{
    /*if(openType == 'single'){
      if(
        this.workSpace[this.workSpackActiveIndex].files[this.workSpaceActive[this.workSpackActiveIndex]].pathArray+'' == filePath+''
      ){
        alert('相同');
        return true;
      }else{
        return false;
      }
    }else if(openType == 'double'){
      let reclick = false;
      this.workSpace[this.workSpackActiveIndex].files.forEach((item,index)=>{
        if(item.pathArray+'' == filePath+''){
          this.workSpaceActive[this.workSpackActiveIndex] = index;
          reclick = true;
        }
      })
      return reclick
    }*/

    let reclick = false;
    this.workSpace[this.workSpackActiveIndex].files.forEach((item,index)=>{
      if(item.pathArray+'' == filePath+''){
        this.workSpaceActive[this.workSpackActiveIndex] = index;
        this.space[this.workSpackActiveIndex].next({
          str:item.str,
          type:item.type,
          path:item.src
        })   
      
        reclick = true;
      }
    })
    return reclick
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
      /*this.firstSpace.next({
        action:'openImage',
        path:this.workSpace[workspackIndex].files[index].src
      });*/
      this.space[workspackIndex].next({
        action:'openImage',
        path:this.workSpace[workspackIndex].files[index].src,
        type:this.workSpace[workspackIndex].files[index].type
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
  saveFile(obj?,callback?){   
    let fileObj = obj||this.workSpace[this.workSpackActiveIndex].files[this.workSpaceActive[this.workSpackActiveIndex]];
    //如果是文本文件
    if(fileObj.type == 'text'){
      fs.writeFile(fileObj.path,fileObj.editor.getValue(),'utf8',(er)=>{
        if(er){
          alert('保存失败');
          return;
        }
        //alert('保存成功');
        /*console.log(fileObj.editor.getModel());
        fileObj.editor.dispose();*/
        fileObj.modelChanges = [];
        if(callback){
          callback()
        }
        
      })
    } 
  }

  /**
   * 关闭文件
   * @param param0 
   */
  dismissFile({workSpaceIndex,fileIndex}){

    //如果是文本文件类型，并作了修改
    if(this.workSpace[workSpaceIndex].files[fileIndex].type=='text'&&this.workSpace[workSpaceIndex].files[fileIndex].modelChanges.length>0){
      let fileName = this.workSpace[workSpaceIndex].files[fileIndex].fileName;
      this.dialog.showMessageBox(
      window['remote'].getCurrentWindow(),
      {
        type:'warning',
        message:`是否要保存对 ${fileName} 的更改？`,
        detail :'如果不保存，更改将丢失。',
        buttons:['保存(S)','不保存(N)','取消'],
        cancelId:2,
        defaultId:1,
        noLink :true
      },(e,checkboxChecked)=>{
        switch(e){
          //保存并关闭
          case 0:
            this.saveFile(this.workSpace[workSpaceIndex].files[fileIndex].type=='text'&&this.workSpace[workSpaceIndex].files[fileIndex],()=>{
              this.closeFile({workSpaceIndex,fileIndex});
            })
            break;
          //直接关闭
          case 1:
            this.closeFile({workSpaceIndex,fileIndex});
            break;
          case 2:
            break;
        }
      });
    }else{
      this.closeFile({workSpaceIndex,fileIndex})
    }    
  }

  /**
   * 关闭文件
   * @param param0 
   */
  closeFile({workSpaceIndex,fileIndex}){
    if(this.workSpace[workSpaceIndex].files.length-1<=fileIndex){
      this.workSpaceActive[workSpaceIndex] = fileIndex-1;
    }
    this.workSpace[workSpaceIndex].files.splice(fileIndex,1);

    if(
      this.workSpace[workSpaceIndex].files[this.workSpaceActive[this.workSpackActiveIndex]]&&
      this.workSpace[workSpaceIndex].files[this.workSpaceActive[this.workSpackActiveIndex]].type!='text'
    ){
      this.space[workSpaceIndex].next({
        type:this.workSpace[workSpaceIndex].files[this.workSpaceActive[this.workSpackActiveIndex]].type,
        path:this.workSpace[workSpaceIndex].files[this.workSpaceActive[this.workSpackActiveIndex]].src
      })
    }
  }




}
