//I created file-path2 which is identical to file-path but this pipe only return the name of the top level server

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filePath2'
})
export class FilePath2Pipe implements PipeTransform {

  transform(list: String): any {

    if (!list) { return []; }

    if (list.charAt(0) === 'Z') {
      console.log(list.charAt(0))
      return 'LFKBWTFENG';
    }
    else if (list.charAt(0) === 'Y') {
      console.log(list.charAt(0))
      return 'WPC-BACKUP';
    }
    else if (list.charAt(0) === 'X') {
      console.log(list.charAt(0))
      return 'LFKBWTFENG\\\\AssetMngm';
    }
    else if (list.charAt(0) === 'W') {
      console.log(list.charAt(0))
      return 'BWT-APPS2';
    }
    if (list.charAt(0) === 'C') {
      console.log(list.charAt(0))
      return 'becC';
    }

    return 'LFKBWTFENG';
  }
}


