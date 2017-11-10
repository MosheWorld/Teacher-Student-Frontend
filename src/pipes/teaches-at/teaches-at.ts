import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teachesAt',
})

export class TeachesAtPipe implements PipeTransform {

  transform(value: number, ...args) {
    let teachesAtValue: string = "";
    switch (value) {
      case 1:
        teachesAtValue = 'Home';
        break;
      case 2:
        teachesAtValue = 'Academic Institute';
        break;
      case 3:
        teachesAtValue = 'Both';
        break;
    }
    return teachesAtValue;
  }
}
