import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teachesInstitutions',
})
export class TeachesInstitutionsPipe implements PipeTransform {

  transform(value: number, ...args) {
    let teachesInstitutionsValue: string = "";
    switch (value) {
      case 0:
        teachesInstitutionsValue = 'Holon Institute Of Technology';
        break;
      case 1:
        teachesInstitutionsValue = 'Technion';
        break;
      case 2:
        teachesInstitutionsValue = 'Tel-Aviv University';
        break;
      case 4:
        teachesInstitutionsValue = 'Ben-Gurion Universit';
        break;
      case 8:
        teachesInstitutionsValue = 'Hebrew University';
        break;
      case 16:
        teachesInstitutionsValue = 'Bar-Ilan University';
        break;
      case 32:
        teachesInstitutionsValue = 'Tel-Aviv Jaffa Academic College';
        break;
      case 64:
        teachesInstitutionsValue = 'IDC Herzliya';
        break;
      case 128:
        teachesInstitutionsValue = 'Ariel University';
        break;
      case 256:
        teachesInstitutionsValue = 'Haifa University';
        break;
      case 512:
        teachesInstitutionsValue = 'Sapir Academic College';
        break;
      case 1024:
        teachesInstitutionsValue = 'ORT Braude Collegeof Engineering';
        break;
      case 2048:
        teachesInstitutionsValue = 'The Open University';
        break;
      case 4096:
        teachesInstitutionsValue = 'College of Management';
        break;
      case 8192:
        teachesInstitutionsValue = 'Achva Academic Campus';
        break;
    }
    return teachesInstitutionsValue;
  }
}
