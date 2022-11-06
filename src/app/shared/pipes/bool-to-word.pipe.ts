import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolToWord',
})
export class BoolToWordPipe implements PipeTransform {
  transform(value: boolean, ...args: any[]): string {
    return value ? 'Yes' : 'No';
  }
}
