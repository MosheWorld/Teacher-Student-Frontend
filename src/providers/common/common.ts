import { Injectable } from '@angular/core';

@Injectable()
export class CommonProvider {

  // Teaches at array Json.
  public teachesAtArray = [
    { value: '1', viewValue: 'Student\'s house' },
    { value: '2', viewValue: 'Academic institution' },
    { value: '3', viewValue: 'Both' }
  ];




  // Gender array Json.
  public genderArray = [
    { value: '1', viewValue: 'Male' },
    { value: '2', viewValue: 'Female' }
  ];




  // Teaches institutions array Json.
  public teachesInstitutionsArray = [
    { value: '1', viewValue: 'Holon Institute Of Technology' },
    { value: '2', viewValue: 'Technion' },
    { value: '3', viewValue: 'Ariel University' },
    { value: '4', viewValue: 'Bar-Ilan University' },
    { value: '5', viewValue: 'Ben Gurion University' },
    { value: '6', viewValue: 'Ben-Gurion University of the Negev' },
    { value: '7', viewValue: 'Hebrew University' },
    { value: '8', viewValue: 'Open University of Israel' },
    { value: '9', viewValue: 'Tel-Aviv University' },
    { value: '10', viewValue: 'Weizmann Institute of Science' },
    { value: '11', viewValue: 'Academic College of Tel Aviv-Yafo' },
    { value: '12', viewValue: 'Afeka College of Engineering' },
    { value: '13', viewValue: 'Ashkelon Academic College' },
    { value: '14', viewValue: 'Beersheba Tehni School' },
    { value: '15', viewValue: 'Beit Zvi School of the Performing Arts' },
    { value: '16', viewValue: 'Bezalel Academy of Art and Design' },
    { value: '17', viewValue: 'Carmel Academic Center' },
    { value: '18', viewValue: 'Center for Academic Studies' },
    { value: '19', viewValue: 'College of Law and Business' },
    { value: '20', viewValue: 'COMAS' },
    { value: '21', viewValue: 'Dan Academic Center' },
    { value: '22', viewValue: 'Hadassah Academic College' },
    { value: '23', viewValue: 'Haredi College of Jerusalem' },
    { value: '24', viewValue: 'Interdisciplinary Center Herzliya' },
    { value: '25', viewValue: 'Israel College of the Bible' },
    { value: '26', viewValue: 'Jerusalem Academy of Music and Dance' },
    { value: '27', viewValue: 'Jerusalem College of Engineering' },
    { value: '28', viewValue: 'Jerusalem College of Technology' },
    { value: '29', viewValue: 'Jerusalem University College' },
    { value: '30', viewValue: 'Kfar-Avraham Technology College' },
    { value: '31', viewValue: 'Kinneret Academic College' },
    { value: '32', viewValue: 'Lander Institute' },
    { value: '33', viewValue: 'Netanya Academic College' },
    { value: '34', viewValue: 'Ono Academi College' },
    { value: '35', viewValue: 'ORT Braude College of Engineering' },
    { value: '36', viewValue: 'Peres Academic Center' },
    { value: '37', viewValue: 'Reidman College' },
    { value: '38', viewValue: 'Ruppin Academic Center' },
    { value: '39', viewValue: 'Sami Shamoon College of Engineering' },
    { value: '40', viewValue: 'Sapir Academic College' },
    { value: '41', viewValue: 'Shenkar College of Engineering and Design' },
    { value: '42', viewValue: 'Tel-Hai Academic College' }
  ];




  // Subjects array Json.
  public subjectsArray = [
    { value: '1', viewValue: 'Advanced Control Theory' },
    { value: '2', viewValue: 'Advanced Programming Workshop' },
    { value: '3', viewValue: 'Algorithm in Optimization' },
    { value: '4', viewValue: 'Analog Linear Electronic Circuits' },
    { value: '5', viewValue: 'Antennas and Radiation' },
    { value: '6', viewValue: 'Approximation algorithms' },
    { value: '7', viewValue: 'Artificial Intelligence' },
    { value: '8', viewValue: 'Automata and Formal Languages' },
    { value: '9', viewValue: 'Calculus' },
    { value: '10', viewValue: 'Communication Engineering' },
    { value: '11', viewValue: 'Compilation Theory' },
    { value: '12', viewValue: 'Complex Functions' },
    { value: '13', viewValue: 'Complex Valued Functions' },
    { value: '14', viewValue: 'Computability and Complexity of Algorithms' },
    { value: '15', viewValue: 'Computer Architecture' },
    { value: '16', viewValue: 'Computer Communication Networks' },
    { value: '17', viewValue: 'Computer Graphics' },
    { value: '18', viewValue: 'Computer Organization and Assembly' },
    { value: '19', viewValue: 'Computer Structure and Switching Theory' },
    { value: '20', viewValue: 'Computer Vision' },
    { value: '21', viewValue: 'Conversion Laboratory Energy' },
    { value: '22', viewValue: 'Data Base Systems' },
    { value: '23', viewValue: 'Data Compression' },
    { value: '24', viewValue: 'Data Mining' },
    { value: '25', viewValue: 'Data Structures' },
    { value: '26', viewValue: 'Design and Analysis of Algorithms' },
    { value: '27', viewValue: 'Design Patterns' },
    { value: '28', viewValue: 'Digital Circuits' },
    { value: '29', viewValue: 'Digital Signal Processing' },
    { value: '30', viewValue: 'Digital Systems' },
    { value: '31', viewValue: 'Discrete Mathematics' },
    { value: '32', viewValue: 'Dynamics and Control Spacecraft' },
    { value: '33', viewValue: 'Electric Drives' },
    { value: '34', viewValue: 'Electrical Engineering Laboratory' },
    { value: '35', viewValue: 'Electromagnetic Fields' },
    { value: '36', viewValue: 'Electronic Materials' },
    { value: '37', viewValue: 'Electronics Computer Aided Design' },
    { value: '38', viewValue: 'Energy Conversion' },
    { value: '39', viewValue: 'Engineering Economics' },
    { value: '40', viewValue: 'Expert Systems' },
    { value: '41', viewValue: 'Filter Design' },
    { value: '42', viewValue: 'Fluid Mechanics' },
    { value: '43', viewValue: 'Forecasting Methods' },
    { value: '44', viewValue: 'Foundations of Information Systems' },
    { value: '45', viewValue: 'Fourier Series and Integral Transforms' },
    { value: '46', viewValue: 'Geometry View Multiple' },
    { value: '47', viewValue: 'Graph Theory' },
    { value: '48', viewValue: 'Hardware Description Languages' },
    { value: '49', viewValue: 'High and Low Voltages Devices' },
    { value: '50', viewValue: 'High Voltage Engineering' },
    { value: '51', viewValue: 'Introduction to Computer Science' },
    { value: '52', viewValue: 'Introduction to Control Theory' },
    { value: '53', viewValue: 'Introduction to Cryptography' },
    { value: '54', viewValue: 'Introduction to Fuzzy Logic' },
    { value: '55', viewValue: 'Introduction to Lasers' },
    { value: '56', viewValue: 'Introduction to Linear Systems' },
    { value: '57', viewValue: 'Introduction to Microwaves' },
    { value: '58', viewValue: 'Introduction to Modern Analysis' },
    { value: '59', viewValue: 'Introduction to Robotics' },
    { value: '60', viewValue: 'Laboratory of Logic Digital Circuits' },
    { value: '61', viewValue: 'Linear Algebra' },
    { value: '62', viewValue: 'Logic Design' },
    { value: '63', viewValue: 'Logic For Computer Science' },
    { value: '64', viewValue: 'Logic Programming' },
    { value: '65', viewValue: 'Machine Learning' },
    { value: '66', viewValue: 'Machine Vision' },
    { value: '67', viewValue: 'Mathematical Modeling' },
    { value: '68', viewValue: 'Mathematical Tools for Computer Science' },
    { value: '69', viewValue: 'Mechanics of Solids' },
    { value: '70', viewValue: 'Microprocessors' },
    { value: '71', viewValue: 'Microprocessors Laboratory' },
    { value: '72', viewValue: 'Modern Optics and Electro optics' },
    { value: '73', viewValue: 'Network Theory' },
    { value: '74', viewValue: 'Neural Networks' },
    { value: '75', viewValue: 'Numerical algorithms' },
    { value: '76', viewValue: 'Numerical Analysis' },
    { value: '77', viewValue: 'Object Oriented Programming' },
    { value: '78', viewValue: 'Operating Systems' },
    { value: '79', viewValue: 'Ordinary Differential Equations' },
    { value: '80', viewValue: 'Partial Differential Equations' },
    { value: '81', viewValue: 'Photonics and Electro-optics systems' },
    { value: '82', viewValue: 'Power Electronics Systems' },
    { value: '83', viewValue: 'Power Systems' },
    { value: '84', viewValue: 'Programming in C' },
    { value: '85', viewValue: 'Programming in C#' },
    { value: '86', viewValue: 'Programming in Java' },
    { value: '87', viewValue: 'Programming in JavaScript' },
    { value: '88', viewValue: 'Programming in Python' },
    { value: '89', viewValue: 'Random Signals' },
    { value: '90', viewValue: 'Real Time Systems' },
    { value: '91', viewValue: 'Receiving and Transmitting Techniques' },
    { value: '92', viewValue: 'Robots Dynamics and Control' },
    { value: '93', viewValue: 'Secure Quality Programs' },
    { value: '94', viewValue: 'Semiconductor Devices' },
    { value: '95', viewValue: 'Semiconductors' },
    { value: '96', viewValue: 'Signal and Image Processing ' },
    { value: '97', viewValue: 'Signals and Systems' },
    { value: '98', viewValue: 'Statistical Inference' },
    { value: '99', viewValue: 'Statistics and Probability' },
    { value: '100', viewValue: 'Switching and Logic Design' },
    { value: '101', viewValue: 'System Programming' },
    { value: '102', viewValue: 'Waves and Distributed Systems' },
    { value: '103', viewValue: 'Waves Propagation' },
    { value: '104', viewValue: 'Web Programming' }
  ];




  // Subjects teaching array Json.
  teachesSubjectsGroupsArray = [
    {
      name: 'A',
      subjects: [
        { value: '1', viewValue: 'Advanced Control Theory' },
        { value: '2', viewValue: 'Advanced Programming Workshop' },
        { value: '3', viewValue: 'Algorithm in Optimization' },
        { value: '4', viewValue: 'Analog Linear Electronic Circuits' },
        { value: '5', viewValue: 'Antennas and Radiation' },
        { value: '6', viewValue: 'Approximation algorithms' },
        { value: '7', viewValue: 'Artificial Intelligence' },
        { value: '8', viewValue: 'Automata and Formal Languages' }
      ]
    },
    {
      name: 'C',
      subjects: [
        { value: '9', viewValue: 'Calculus' },
        { value: '10', viewValue: 'Communication Engineering' },
        { value: '11', viewValue: 'Compilation Theory' },
        { value: '12', viewValue: 'Complex Functions' },
        { value: '13', viewValue: 'Complex Valued Functions' },
        { value: '14', viewValue: 'Computability and Complexity of Algorithms' },
        { value: '15', viewValue: 'Computer Architecture' },
        { value: '16', viewValue: 'Computer Communication Networks' },
        { value: '17', viewValue: 'Computer Graphics' },
        { value: '18', viewValue: 'Computer Organization and Assembly' },
        { value: '19', viewValue: 'Computer Structure and Switching Theory' },
        { value: '20', viewValue: 'Computer Vision' },
        { value: '21', viewValue: 'Conversion Laboratory Energy' }
      ]
    },
    {
      name: 'D',
      subjects: [
        { value: '22', viewValue: 'Data Base Systems' },
        { value: '23', viewValue: 'Data Compression' },
        { value: '24', viewValue: 'Data Mining' },
        { value: '25', viewValue: 'Data Structures' },
        { value: '26', viewValue: 'Design and Analysis of Algorithms' },
        { value: '27', viewValue: 'Design Patterns' },
        { value: '28', viewValue: 'Digital Circuits' },
        { value: '29', viewValue: 'Digital Signal Processing' },
        { value: '30', viewValue: 'Digital Systems' },
        { value: '31', viewValue: 'Discrete Mathematics' },
        { value: '32', viewValue: 'Dynamics and Control Spacecraft' }
      ]
    },
    {
      name: 'E',
      subjects: [
        { value: '33', viewValue: 'Electric Drives' },
        { value: '34', viewValue: 'Electrical Engineering Laboratory' },
        { value: '35', viewValue: 'Electromagnetic Fields' },
        { value: '36', viewValue: 'Electronic Materials' },
        { value: '37', viewValue: 'Electronics Computer Aided Design' },
        { value: '38', viewValue: 'Energy Conversion' },
        { value: '39', viewValue: 'Engineering Economics' },
        { value: '40', viewValue: 'Expert Systems' }
      ]
    },
    {
      name: 'F',
      subjects: [
        { value: '41', viewValue: 'Filter Design' },
        { value: '42', viewValue: 'Fluid Mechanics' },
        { value: '43', viewValue: 'Forecasting Methods' },
        { value: '44', viewValue: 'Foundations of Information Systems' },
        { value: '45', viewValue: 'Fourier Series and Integral Transforms' }
      ]
    },
    {
      name: 'G',
      subjects: [
        { value: '46', viewValue: 'Geometry View Multiple' },
        { value: '47', viewValue: 'Graph Theory' }
      ]
    },
    {
      name: 'H',
      subjects: [
        { value: '48', viewValue: 'Hardware Description Languages' },
        { value: '49', viewValue: 'High and Low Voltages Devices' },
        { value: '50', viewValue: 'High Voltage Engineering' }
      ]
    },
    {
      name: 'I',
      subjects: [
        { value: '51', viewValue: 'Introduction to Computer Science' },
        { value: '52', viewValue: 'Introduction to Control Theory' },
        { value: '53', viewValue: 'Introduction to Cryptography' },
        { value: '54', viewValue: 'Introduction to Fuzzy Logic' },
        { value: '55', viewValue: 'Introduction to Lasers' },
        { value: '56', viewValue: 'Introduction to Linear Systems' },
        { value: '57', viewValue: 'Introduction to Microwaves' },
        { value: '58', viewValue: 'Introduction to Modern Analysis' },
        { value: '59', viewValue: 'Introduction to Robotics' }
      ]
    },
    {
      name: 'L',
      subjects: [
        { value: '60', viewValue: 'Laboratory of Logic Digital Circuits' },
        { value: '61', viewValue: 'Linear Algebra' },
        { value: '62', viewValue: 'Logic Design' },
        { value: '63', viewValue: 'Logic For Computer Science' },
        { value: '64', viewValue: 'Logic Programming' }
      ]
    },
    {
      name: 'M',
      subjects: [
        { value: '65', viewValue: 'Machine Learning' },
        { value: '66', viewValue: 'Machine Vision' },
        { value: '67', viewValue: 'Mathematical Modeling' },
        { value: '68', viewValue: 'Mathematical Tools for Computer Science' },
        { value: '69', viewValue: 'Mechanics of Solids' },
        { value: '70', viewValue: 'Microprocessors' },
        { value: '71', viewValue: 'Microprocessors Laboratory' },
        { value: '72', viewValue: 'Modern Optics and Electro optics' }
      ]
    },
    {
      name: 'N',
      subjects: [
        { value: '73', viewValue: 'Network Theory' },
        { value: '74', viewValue: 'Neural Networks' },
        { value: '75', viewValue: 'Numerical algorithms' },
        { value: '76', viewValue: 'Numerical Analysis' }
      ]
    },
    {
      name: 'O',
      subjects: [
        { value: '77', viewValue: 'Object Oriented Programming' },
        { value: '78', viewValue: 'Operating Systems' },
        { value: '79', viewValue: 'Ordinary Differential Equations' }
      ]
    },
    {
      name: 'P',
      subjects: [
        { value: '80', viewValue: 'Partial Differential Equations' },
        { value: '81', viewValue: 'Photonics and Electro-optics systems' },
        { value: '82', viewValue: 'Power Electronics Systems' },
        { value: '83', viewValue: 'Power Systems' },
        { value: '84', viewValue: 'Programming in C' },
        { value: '85', viewValue: 'Programming in C#' },
        { value: '86', viewValue: 'Programming in Java' },
        { value: '87', viewValue: 'Programming in JavaScript' },
        { value: '88', viewValue: 'Programming in Python' }
      ]
    },
    {
      name: 'R',
      subjects: [
        { value: '89', viewValue: 'Random Signals' },
        { value: '90', viewValue: 'Real Time Systems' },
        { value: '91', viewValue: 'Receiving and Transmitting Techniques' },
        { value: '92', viewValue: 'Robots Dynamics and Control' }
      ]
    },
    {
      name: 'S',
      subjects: [
        { value: '93', viewValue: 'Secure Quality Programs' },
        { value: '94', viewValue: 'Semiconductor Devices' },
        { value: '95', viewValue: 'Semiconductors' },
        { value: '96', viewValue: 'Signal and Image Processing ' },
        { value: '97', viewValue: 'Signals and Systems' },
        { value: '98', viewValue: 'Statistical Inference' },
        { value: '99', viewValue: 'Statistics and Probability' },
        { value: '100', viewValue: 'Switching and Logic Design' },
        { value: '101', viewValue: 'System Programming' }
      ]
    },
    {
      name: 'W',
      subjects: [
        { value: '102', viewValue: 'Waves and Distributed Systems' },
        { value: '103', viewValue: 'Waves Propagation' },
        { value: '104', viewValue: 'Web Programming' }
      ]
    }
  ];



  // Reason to contact array Json.
  public reasonToContactArray = [
    { value: 'Suggestion', viewValue: 'Suggestion' },
    { value: 'Investment', viewValue: 'Investment' },
    { value: 'Careers', viewValue: 'Careers' },
    { value: 'Complain', viewValue: 'Complain' },
    { value: 'Bug report', viewValue: 'Bug report' },
    { value: 'Other', viewValue: 'Other' }
  ];


  // subjectsArray.sort(function (a, b) {
  //   if (a.viewValue.toLowerCase() < b.viewValue.toLowerCase()) {
  //     return -1;
  //   } else if (a.viewValue.toLowerCase() > b.viewValue.toLowerCase()) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // });

  // for (var i = 1; i <= subjectsArray.length; i++) {
  //   var buildString = "{ value: '" + i + "', viewValue: '" + subjectsArray[i - 1].viewValue + "' },<br>";
  //   document.getElementById("test").innerHTML += buildString;
  // }

  //#region Constructor
  constructor() {
  }
  //#endregion
}
