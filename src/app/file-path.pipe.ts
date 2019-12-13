//The file-path looks at the first character within the link, if its Z it will return "LFKBWTFENG\\plant drawings" and if its Y itll return "WPC-BACKUP\\ScannedDocs-DEC BWT etc"

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filePath'
})
export class FilePathPipe implements PipeTransform {

  //transform(value: String): any {

  // if(value.charAt(0)=== 'Z'){
  //   value= '//LFKBWTFENG/plant drawings';
  //   return value
  //  }
  //  else if (value.charAt(0) === 'Y') {
  ///    value= '//WPC-BACKUP/ScannedDocs';
  //    return value
  //  }

  // }

  transform(list: String): any {

    if (!list) { return []; }

    if (list.charAt(0) === 'Z') {
      console.log(list.charAt(0))
      return 'LFKBWTFENG\\plant drawings';
    }
    else if (list.charAt(0) === 'Y') {
      console.log(list.charAt(0))
      return 'WPC-BACKUP\\ScannedDocs-DEC BWT etc';
    }
    else if (list.charAt(0) === 'X') {
      console.log(list.charAt(0))
      return 'LFKBWTFENG\\Asset Mgmt Planning\\CCFISS';
    }
    else if (list.charAt(0) === 'W') {
      console.log(list.charAt(0))
      return 'bwt-apps2\\II-Commonfiles';
    }
    else if (list.charAt(0) === 'C') {
      console.log(list.charAt(0))
      return 'bec';
    }

    return 'LFKBWTFENG\\plant drawings';
  }

}
