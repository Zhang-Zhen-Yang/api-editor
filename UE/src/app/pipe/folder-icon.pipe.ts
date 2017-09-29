import { Pipe, PipeTransform } from '@angular/core';
import { extensions } from './supportedFolders'
import { FileFormat } from './fileFormat'
@Pipe({
  name: 'folderIcon'
})
export class FolderIconPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //return args==true?'./src/icons/default_folder_opened.svg':'./src/icons/default_folder.svg';
    for(let item of extensions.supported){
      for(let ext of item.extensions){
        let extName = ext;
        /*if(extName[0]!='.'){
          extName = '.'+extName;
        }*/
        //console.log(extName);
        if(value.endsWith(extName)){
          return './src/icons/folder_type_'+item.icon+(args==true?'_opened':'')+'.'+ FileFormat[item.format];
        }
      }
    }
    return args==true?'./src/icons/default_folder_opened.svg':'./src/icons/default_folder.svg';

  }

}
