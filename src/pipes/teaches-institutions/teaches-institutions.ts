import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teachesInstitutions',
})
export class TeachesInstitutionsPipe implements PipeTransform {

  transform(value: number, ...args) {
    let teachesInstitutionsValue: string = "";
    switch (value) {
      case 1:
        teachesInstitutionsValue = 'Holon Institute Of Technology';
        break;
      case 2:
        teachesInstitutionsValue = 'Technion';
        break;
      case 3:
        teachesInstitutionsValue = 'Tel-Aviv University';
        break;
      case 4:
        teachesInstitutionsValue = 'Ben-Gurion Universit';
        break;
      case 5:
        teachesInstitutionsValue = 'Hebrew University';
        break;
      case 6:
        teachesInstitutionsValue = 'Bar-Ilan University';
        break;
      case 7:
        teachesInstitutionsValue = 'Tel-Aviv Jaffa Academic College';
        break;
      case 8:
        teachesInstitutionsValue = 'IDC Herzliya';
        break;
      case 9:
        teachesInstitutionsValue = 'Ariel University';
        break;
      case 10:
        teachesInstitutionsValue = 'Haifa University';
        break;
      case 11:
        teachesInstitutionsValue = 'Sapir Academic College';
        break;
      case 12:
        teachesInstitutionsValue = 'ORT Braude Collegeof Engineering';
        break;
      case 13:
        teachesInstitutionsValue = 'The Open University';
        break;
      case 14:
        teachesInstitutionsValue = 'College of Management';
        break;
      case 15:
        teachesInstitutionsValue = 'Achva Academic Campus';
        break;
      default:
        console.log("Bad pipe value.");
        break;
    }
    return teachesInstitutionsValue;
  }
}
