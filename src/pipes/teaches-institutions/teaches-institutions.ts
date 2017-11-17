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
        teachesInstitutionsValue = 'Ariel University';
        break;
      case 4:
        teachesInstitutionsValue = 'Bar-Ilan University';
        break;
      case 5:
        teachesInstitutionsValue = 'Ben Gurion University';
        break;
      case 6:
        teachesInstitutionsValue = 'Ben-Gurion University of the Negev';
        break;
      case 7:
        teachesInstitutionsValue = 'Hebrew University';
        break;
      case 8:
        teachesInstitutionsValue = 'Open University of Israel';
        break;
      case 9:
        teachesInstitutionsValue = 'Tel-Aviv University';
        break;
      case 10:
        teachesInstitutionsValue = 'Weizmann Institute of Science';
        break;
      case 11:
        teachesInstitutionsValue = 'Academic College of Tel Aviv-Yafo';
        break;
      case 12:
        teachesInstitutionsValue = 'Afeka College of Engineering';
        break;
      case 13:
        teachesInstitutionsValue = 'Ashkelon Academic College';
        break;
      case 14:
        teachesInstitutionsValue = 'Beersheba Tehni School';
        break;
      case 15:
        teachesInstitutionsValue = 'Beit Zvi School of the Performing Arts';
        break;
      case 16:
        teachesInstitutionsValue = 'Bezalel Academy of Art and Design';
        break;
      case 17:
        teachesInstitutionsValue = 'Carmel Academic Center';
        break;
      case 18:
        teachesInstitutionsValue = 'Center for Academic Studies';
        break;
      case 19:
        teachesInstitutionsValue = 'College of Law and Business';
        break;
      case 20:
        teachesInstitutionsValue = 'COMAS';
        break;
      case 21:
        teachesInstitutionsValue = 'Dan Academic Center';
        break;
      case 22:
        teachesInstitutionsValue = 'Hadassah Academic College';
        break;
      case 23:
        teachesInstitutionsValue = 'Haredi College of Jerusalem';
        break;
      case 24:
        teachesInstitutionsValue = 'Interdisciplinary Center Herzliya';
        break;
      case 25:
        teachesInstitutionsValue = 'Israel College of the Bible';
        break;
      case 26:
        teachesInstitutionsValue = 'Jerusalem Academy of Music and Dance';
        break;
      case 27:
        teachesInstitutionsValue = 'Jerusalem College of Engineering';
        break;
      case 28:
        teachesInstitutionsValue = 'Jerusalem College of Technology';
        break;
      case 29:
        teachesInstitutionsValue = 'Jerusalem University College';
        break;
      case 30:
        teachesInstitutionsValue = 'Kfar-Avraham Technology College';
        break;
      case 31:
        teachesInstitutionsValue = 'Kinneret Academic College';
        break;
      case 32:
        teachesInstitutionsValue = 'Lander Institute';
        break;
      case 33:
        teachesInstitutionsValue = 'Netanya Academic College';
        break;
      case 34:
        teachesInstitutionsValue = 'Ono Academi College';
        break;
      case 35:
        teachesInstitutionsValue = 'ORT Braude College of Engineering';
        break;
      case 36:
        teachesInstitutionsValue = 'Peres Academic Center';
        break;
      case 37:
        teachesInstitutionsValue = 'Reidman College';
        break;
      case 38:
        teachesInstitutionsValue = 'Ruppin Academic Center';
        break;
      case 39:
        teachesInstitutionsValue = 'Sami Shamoon College of Engineering';
        break;
      case 40:
        teachesInstitutionsValue = 'Sapir Academic College';
        break;
      case 41:
        teachesInstitutionsValue = 'Shenkar College of Engineering and Design';
        break;
      case 42:
        teachesInstitutionsValue = 'Tel-Hai Academic College';
        break;
      default:
        console.log("Bad pipe value.");
        break;
    }
    return teachesInstitutionsValue;
  }
}
