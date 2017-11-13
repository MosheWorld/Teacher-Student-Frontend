import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonProvider {

  public teachesAtArray = [
    { value: '1', viewValue: 'Student\'s house' },
    { value: '2', viewValue: 'Academic institution' },
    { value: '3', viewValue: 'Both' }
  ];

  public genderArray = [{ value: 'Male', viewValue: 'Male' }, { value: 'Female', viewValue: 'Female' }];

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
    { value: '11', viewValue: '' },
    { value: '12', viewValue: '' },
    { value: '13', viewValue: '' },
    { value: '14', viewValue: '' },
    { value: '15', viewValue: '' },
    { value: '16', viewValue: '' },
    { value: '17', viewValue: '' },
    { value: '18', viewValue: '' },
    { value: '19', viewValue: '' },
    { value: '20', viewValue: '' },
    { value: '21', viewValue: '' },
    { value: '22', viewValue: '' },
    { value: '23', viewValue: '' },
    { value: '24', viewValue: '' },
    { value: '25', viewValue: '' },
    { value: '26', viewValue: '' },
    { value: '27', viewValue: '' },
    { value: '28', viewValue: '' },
    { value: '29', viewValue: '' },
    { value: '30', viewValue: '' },
    { value: '31', viewValue: '' },
    { value: '32', viewValue: '' },
    { value: '33', viewValue: '' },
    { value: '34', viewValue: '' },
    { value: '35', viewValue: '' },
    { value: '36', viewValue: '' },
    { value: '37', viewValue: '' },
    { value: '38', viewValue: '' },
    { value: '39', viewValue: '' },
    { value: '40', viewValue: '' },
    { value: '41', viewValue: '' },
    { value: '42', viewValue: '' },
  ];

  constructor() {

  }
}
