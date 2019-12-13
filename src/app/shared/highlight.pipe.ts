import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})

export class HighlightPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { }



  transform(list: any, searchText: string): any {
    // if (args && value) {
    //     let startIndex = value.toLowerCase().indexOf(args.toLowerCase());
    //     if (startIndex != -1) {
    //         let endLength = args.length;
    //         let matchingString = value.substr(startIndex, endLength);
    //        value = value.replace(matchingString, "<span style='background-color:yellow'>" + matchingString + "</span>");
    //        return this._sanitizer.bypassSecurityTrustHtml(value);
    //     }

    // }

    if (!list) { return []; }
    if (!searchText) { return list; }

    var re = new RegExp(searchText, 'gi');

    const value = list.replace(
      re, `<span style='background-color:yellow'>${searchText}</span>`);

    // console.log('value', value);

    return this._sanitizer.bypassSecurityTrustHtml(value);
  }
}
