import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightslice'
})
export class HighlightslicePipe implements PipeTransform {
  _sanitizer: any;

  constructor() { }
  public position;
  public min = 0;
  public max = 400;


  getIndexWindow(x, y) {
    if(!x || !y) {
      return;
    }

    this.position = x.toLowerCase().indexOf(y.toLowerCase());

    if (this.position < 200) {
      var z = x.substring(this.min, this.max);
      var newPosition = z.indexOf(y);
      return newPosition;
    }

    else {
      //console.log(this.min, this.max, this.position);

      this.min = this.position - 200;
      this.max = this.position + 200;

      var z = x.substring(this.min, this.max);
      return this.position;
    }

  }


  transform(list: any, searchText: string): any {
    this.min = 0;
    this.max = 400;

    if(!list) {
      return list;
    }

    //this function takes in the entire document and the search term
    this.getIndexWindow(list, searchText);

    // Take the search text and return substring between the min and max index.

    // this line of code subset the entire file
    var value = list.substring(this.min,this.max);

    return value;
  }

}
