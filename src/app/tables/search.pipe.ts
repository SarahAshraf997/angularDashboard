import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log('value' + value + ' ' + 'args=' + args);
    if (!value) return null;
    if (!args) return value;
    args = args.toLowerCase();
    return value.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }
}
