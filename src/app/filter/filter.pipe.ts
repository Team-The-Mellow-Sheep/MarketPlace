import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filterargs: string): any {

    // filter items array, items which match and return true will be kept, false will be filtered out
    // return smartPhones.filter(smartPhone => smartPhone.title.indexOf(filterargs) !== -1);
    // return items.filter(item => item.title.indexOf(filterargs)!==1);
    console.log(items);
    if (items == undefined) {
      return "No results";
    }
    else {
      return items;
    }
  }

}
