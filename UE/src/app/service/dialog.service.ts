import { Injectable } from '@angular/core';

@Injectable()
export class DialogService {

  remote
  constructor() { 
    this.remote = window['remote'];
  }

  showMessageBox(browserWindow,options,callback){
    this.remote.dialog.showMessageBox(browserWindow,options,callback);
  }

}
