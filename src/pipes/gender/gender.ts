import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})

export class GenderPipe implements PipeTransform {

  transform(value: number, ...args) {
    let genderValue: string = "";
    switch (value) {
      case 1:
        genderValue = "Male";
        break;
      case 2:
        genderValue = "Female";
        break;
      default:
        console.log("Bad pipe input.");
      
    }
    return genderValue;
  }
}
