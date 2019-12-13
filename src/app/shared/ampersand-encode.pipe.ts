import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ampersandEncode'
})
export class AmpersandEncodePipe implements PipeTransform {

  transform(list: any): any {

    if (!list) { return []; }
    

    const value = list.replace('&', '%26');
    console.log('value', value);

    return value;
  }
}
