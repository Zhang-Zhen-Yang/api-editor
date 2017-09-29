import { Pipe, PipeTransform } from '@angular/core';
import { extensions } from './supportedExtensions'
import { FileFormat } from './fileFormat'
@Pipe({
  name: 'fileIcon'
})
export class FileIconPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    /*let dotIndex = value.lastIndexOf('.'),
      extname = 'un';
    if(dotIndex>-1){
      return './src/icons/file_type_'+value.slice(dotIndex+1)+'.svg';
    }*/
    

    for(let item of extensions.supported){
      if(item['languages']){
        let extName = item['languages'][0].defaultExtension;
        if(extName[0]!='.'){
          extName = '.'+extName;
        }
        if(value.endsWith(extName)){
          return './src/icons/file_type_'+item.icon+'.'+FileFormat[item.format];
        }
      }else{
        for(let ext of item.extensions){
          let extName = ext;
          if(extName[0]!='.'){
            extName = '.'+extName;
          }
          if(value.endsWith(extName)){
            return './src/icons/file_type_'+item.icon+'.'+ FileFormat[item.format];
          }
        }
      }
    }
    return './src/icons/default_file'+'.'+ 'svg';
  }

}
