import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teachesSubjects',
})

export class TeachesSubjectsPipe implements PipeTransform {

  transform(value: number, ...args) {
    let teachesSubjectsValue: string;
    switch (value) {
      case 1:
        teachesSubjectsValue = 'Advanced Control Theory';
        break;
      case 2:
        teachesSubjectsValue = 'Advanced Programming Workshop';
        break;
      case 3:
        teachesSubjectsValue = 'Algorithm in Optimization';
        break;
      case 4:
        teachesSubjectsValue = 'Analog Linear Electronic Circuits';
        break;
      case 5:
        teachesSubjectsValue = 'Antennas and Radiation';
        break;
      case 6:
        teachesSubjectsValue = 'Approximation algorithms';
        break;
      case 7:
        teachesSubjectsValue = 'Artificial Intelligence';
        break;
      case 8:
        teachesSubjectsValue = 'Automata and Formal Languages';
        break;
      case 9:
        teachesSubjectsValue = 'Calculus';
        break;
      case 10:
        teachesSubjectsValue = 'Communication Engineering';
        break;
      case 11:
        teachesSubjectsValue = 'Compilation Theory';
        break;
      case 12:
        teachesSubjectsValue = 'Complex Functions';
        break;
      case 13:
        teachesSubjectsValue = 'Complex Valued Functions';
        break;
      case 14:
        teachesSubjectsValue = 'Computability and Complexity of Algorithms';
        break;
      case 15:
        teachesSubjectsValue = 'Computer Architecture';
        break;
      case 16:
        teachesSubjectsValue = 'Computer Communication Networks';
        break;
      case 17:
        teachesSubjectsValue = 'Computer Graphics';
        break;
      case 18:
        teachesSubjectsValue = 'Computer Organization and Assembly';
        break;
      case 19:
        teachesSubjectsValue = 'Computer Structure and Switching Theory';
        break;
      case 20:
        teachesSubjectsValue = 'Computer Vision';
        break;
      case 21:
        teachesSubjectsValue = 'Conversion Laboratory Energy';
        break;
      case 22:
        teachesSubjectsValue = 'Data Base Systems';
        break;
      case 23:
        teachesSubjectsValue = 'Data Compression';
        break;
      case 24:
        teachesSubjectsValue = 'Data Mining';
        break;
      case 25:
        teachesSubjectsValue = 'Data Structures';
        break;
      case 26:
        teachesSubjectsValue = 'Design and Analysis of Algorithms';
        break;
      case 27:
        teachesSubjectsValue = 'Design Patterns';
        break;
      case 28:
        teachesSubjectsValue = 'Digital Circuits';
        break;
      case 29:
        teachesSubjectsValue = 'Digital Signal Processing';
        break;
      case 30:
        teachesSubjectsValue = 'Digital Systems';
        break;
      case 31:
        teachesSubjectsValue = 'Discrete Mathematics';
        break;
      case 32:
        teachesSubjectsValue = 'Dynamics and Control Spacecraft';
        break;
      case 33:
        teachesSubjectsValue = 'Electric Drives';
        break;
      case 34:
        teachesSubjectsValue = 'Electrical Engineering Laboratory';
        break;
      case 35:
        teachesSubjectsValue = 'Electromagnetic Fields';
        break;
      case 36:
        teachesSubjectsValue = 'Electronic Materials';
        break;
      case 37:
        teachesSubjectsValue = 'Electronics Computer Aided Design';
        break;
      case 38:
        teachesSubjectsValue = 'Energy Conversion';
        break;
      case 39:
        teachesSubjectsValue = 'Engineering Economics';
        break;
      case 40:
        teachesSubjectsValue = 'Expert Systems';
        break;
      case 41:
        teachesSubjectsValue = 'Filter Design';
        break;
      case 42:
        teachesSubjectsValue = 'Fluid Mechanics';
        break;
      case 43:
        teachesSubjectsValue = 'Forecasting Methods';
        break;
      case 44:
        teachesSubjectsValue = 'Foundations of Information Systems';
        break;
      case 45:
        teachesSubjectsValue = 'Fourier Series and Integral Transforms';
        break;
      case 46:
        teachesSubjectsValue = 'Geometry View Multiple';
        break;
      case 47:
        teachesSubjectsValue = 'Graph Theory';
        break;
      case 48:
        teachesSubjectsValue = 'Hardware Description Languages';
        break;
      case 49:
        teachesSubjectsValue = 'High and Low Voltages Devices';
        break;
      case 50:
        teachesSubjectsValue = 'High Voltage Engineering';
        break;
      case 51:
        teachesSubjectsValue = 'Introduction to Computer Science';
        break;
      case 52:
        teachesSubjectsValue = 'Introduction to Control Theory';
        break;
      case 53:
        teachesSubjectsValue = 'Introduction to Cryptography';
        break;
      case 54:
        teachesSubjectsValue = 'Introduction to Fuzzy Logic';
        break;
      case 55:
        teachesSubjectsValue = 'Introduction to Lasers';
        break;
      case 56:
        teachesSubjectsValue = 'Introduction to Linear Systems';
        break;
      case 57:
        teachesSubjectsValue = 'Introduction to Microwaves';
        break;
      case 58:
        teachesSubjectsValue = 'Introduction to Modern Analysis';
        break;
      case 59:
        teachesSubjectsValue = 'Introduction to Robotics';
        break;
      case 60:
        teachesSubjectsValue = 'Laboratory of Logic Digital Circuits';
        break;
      case 61:
        teachesSubjectsValue = 'Linear Algebra';
        break;
      case 62:
        teachesSubjectsValue = 'Logic Design';
        break;
      case 63:
        teachesSubjectsValue = 'Logic For Computer Science';
        break;
      case 64:
        teachesSubjectsValue = 'Logic Programming';
        break;
      case 65:
        teachesSubjectsValue = 'Machine Learning';
        break;
      case 66:
        teachesSubjectsValue = 'Machine Vision';
        break;
      case 67:
        teachesSubjectsValue = 'Mathematical Modeling';
        break;
      case 68:
        teachesSubjectsValue = 'Mathematical Tools for Computer Science';
        break;
      case 69:
        teachesSubjectsValue = 'Mechanics of Solids';
        break;
      case 70:
        teachesSubjectsValue = 'Microprocessors';
        break;
      case 71:
        teachesSubjectsValue = 'Microprocessors Laboratory';
        break;
      case 72:
        teachesSubjectsValue = 'Modern Optics and Electro optics';
        break;
      case 73:
        teachesSubjectsValue = 'Network Theory';
        break;
      case 74:
        teachesSubjectsValue = 'Neural Networks';
        break;
      case 75:
        teachesSubjectsValue = 'Numerical algorithms';
        break;
      case 76:
        teachesSubjectsValue = 'Numerical Analysis';
        break;
      case 77:
        teachesSubjectsValue = 'Object Oriented Programming';
        break;
      case 78:
        teachesSubjectsValue = 'Operating Systems';
        break;
      case 79:
        teachesSubjectsValue = 'Ordinary Differential Equations';
        break;
      case 80:
        teachesSubjectsValue = 'Partial Differential Equations';
        break;
      case 81:
        teachesSubjectsValue = 'Photonics and Electro-optics systems';
        break;
      case 82:
        teachesSubjectsValue = 'Power Electronics Systems';
        break;
      case 83:
        teachesSubjectsValue = 'Power Systems';
        break;
      case 84:
        teachesSubjectsValue = 'Programming in C';
        break;
      case 85:
        teachesSubjectsValue = 'Programming in C#';
        break;
      case 86:
        teachesSubjectsValue = 'Programming in Java';
        break;
      case 87:
        teachesSubjectsValue = 'Programming in JavaScript';
        break;
      case 88:
        teachesSubjectsValue = 'Programming in Python';
        break;
      case 89:
        teachesSubjectsValue = 'Random Signals';
        break;
      case 90:
        teachesSubjectsValue = 'Real Time Systems';
        break;
      case 91:
        teachesSubjectsValue = 'Receiving and Transmitting Techniques';
        break;
      case 92:
        teachesSubjectsValue = 'Robots Dynamics and Control';
        break;
      case 93:
        teachesSubjectsValue = 'Secure Quality Programs';
        break;
      case 94:
        teachesSubjectsValue = 'Semiconductor Devices';
        break;
      case 95:
        teachesSubjectsValue = 'Semiconductors';
        break;
      case 96:
        teachesSubjectsValue = 'Signal and Image Processing ';
        break;
      case 97:
        teachesSubjectsValue = 'Signals and Systems';
        break;
      case 98:
        teachesSubjectsValue = 'Statistical Inference';
        break;
      case 99:
        teachesSubjectsValue = 'Statistics and Probability';
        break;
      case 100:
        teachesSubjectsValue = 'Switching and Logic Design';
        break;
      case 101:
        teachesSubjectsValue = 'System Programming';
        break;
      case 102:
        teachesSubjectsValue = 'Waves and Distributed Systems';
        break;
      case 103:
        teachesSubjectsValue = 'Waves Propagation';
        break;
      case 104:
        teachesSubjectsValue = 'Web Programming';
        break;
      default:
        console.log("Bad pipe value.");
        break;
    }
    return teachesSubjectsValue;
  }
}
