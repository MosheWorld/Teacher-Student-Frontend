import { Injectable } from '@angular/core';

@Injectable()
export class CommonProvider {

  public teachesAtArray = [
    { value: '1', viewValue: 'Student\'s house' },
    { value: '2', viewValue: 'Academic institution' },
    { value: '3', viewValue: 'Both' }
  ];

  public genderArray = [
    { value: '1', viewValue: 'Male' },
    { value: '2', viewValue: 'Female' }
  ];

  public teachesInstitutionsArray = [
    { value: '1', viewValue: 'Holon Institute Of Technology' },
    { value: '2', viewValue: 'Technion' },
    { value: '3', viewValue: 'Tel-Aviv University' },
    { value: '4', viewValue: 'Ben Gurion University' },
    { value: '5', viewValue: 'Hebrew University' },
    { value: '6', viewValue: 'Bar-Ilan University' },
    { value: '7', viewValue: 'Weizmann Institute of Science' },
    { value: '8', viewValue: 'Ben-Gurion University of the Negev' },
    { value: '9', viewValue: 'Open University of Israel' },
    { value: '10', viewValue: 'Ariel University' },
    { value: '11', viewValue: 'Haredi College of Jerusalem' },
    { value: '12', viewValue: 'College of Law and Business' },
    { value: '13', viewValue: 'Academic College of Tel Aviv-Yafo' },
    { value: '14', viewValue: 'Afeka College of Engineering' },
    { value: '15', viewValue: 'Ashkelon Academic College' },
    { value: '16', viewValue: 'Beersheba Tehni School' },
    { value: '17', viewValue: 'Beit Zvi School of the Performing Arts' },
    { value: '18', viewValue: 'Bezalel Academy of Art and Design' },
    { value: '19', viewValue: 'Carmel Academic Center' },
    { value: '20', viewValue: 'Center for Academic Studies' },
    { value: '21', viewValue: 'COMAS' },
    { value: '22', viewValue: 'Dan Academic Center' },
    { value: '23', viewValue: 'Kfar-Avraham Technology College' },
    { value: '24', viewValue: 'Hadassah Academic College' },
    { value: '25', viewValue: 'Interdisciplinary Center Herzliya' },
    { value: '26', viewValue: 'Israel College of the Bible' },
    { value: '27', viewValue: 'Jerusalem Academy of Music and Dance' },
    { value: '28', viewValue: 'Jerusalem College of Engineering' },
    { value: '29', viewValue: 'Jerusalem College of Technology' },
    { value: '30', viewValue: 'Jerusalem University College' },
    { value: '31', viewValue: 'Kinneret Academic College' },
    { value: '32', viewValue: 'Lander Institute' },
    { value: '33', viewValue: 'Netanya Academic College' },
    { value: '34', viewValue: 'Ono Academi College' },
    { value: '35', viewValue: 'ORT Braude College of Engineering' },
    { value: '36', viewValue: 'Peres Academic Center' },
    { value: '37', viewValue: 'Reidman College' },
    { value: '38', viewValue: 'Ruppin Academic Center' },
    { value: '39', viewValue: 'Sapir Academic College' },
    { value: '40', viewValue: 'Sami Shamoon College of Engineering' },
    { value: '41', viewValue: 'Shenkar College of Engineering and Design' },
    { value: '42', viewValue: 'Tel-Hai Academic College' },
  ];

  public subjectsArray = [
    { value: '1', viewValue: 'None' }
  ];

  public reasonToContactArray = [
    { value: 'Suggestion', viewValue: 'Suggestion' },
    { value: 'Investment', viewValue: 'Investment' },
    { value: 'Careers', viewValue: 'Careers' },
    { value: 'Complain', viewValue: 'Complain' },
    { value: 'Bug report', viewValue: 'Bug report' },
    { value: 'Other', viewValue: 'Other' }
  ];

  constructor() {

  }
}
