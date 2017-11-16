import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teachesSubjects',
})

export class TeachesSubjectsPipe implements PipeTransform {

  transform(value: number, ...args) {
    let teachesSubjectsValue: string;
    switch (value) {
      case 1:
        teachesSubjectsValue = 'Introduction to Computer Science';
        break;
      case 2:
        teachesSubjectsValue = 'Data Structures';
        break;
      case 3:
        teachesSubjectsValue = 'Mathematical Tools for Computer Science';
        break;
      case 4:
        teachesSubjectsValue = 'Advanced Programming Workshop';
        break;
      case 5:
        teachesSubjectsValue = 'Computer Organization and Assembly';
        break;
      case 6:
        teachesSubjectsValue = 'Computer Structure and Switching Theory';
        break;
      case 7:
        teachesSubjectsValue = 'Operating Systems';
        break;
      case 8:
        teachesSubjectsValue = 'Automata and Formal Languages';
        break;
      case 9:
        teachesSubjectsValue = 'Design and Analysis of Algorithms';
        break;
      case 10:
        teachesSubjectsValue = 'Logic For Computer Science';
        break;
      case 11:
        teachesSubjectsValue = 'Logic Programming';
        break;
      case 12:
        teachesSubjectsValue = 'Data Base Systems';
        break;
      case 13:
        teachesSubjectsValue = 'Compilation Theory';
        break;
      case 14:
        teachesSubjectsValue = 'Computer Communication Networks';
        break;
      case 15:
        teachesSubjectsValue = 'Computability and Complexity of Algorithms';
        break;
      case 16:
        teachesSubjectsValue = 'Object Oriented Programming';
        break;
      case 17:
        teachesSubjectsValue = 'Foundations of Information Systems';
        break;
      case 18:
        teachesSubjectsValue = 'Graph Theory';
        break;
      case 19:
        teachesSubjectsValue = 'Real Time Systems';
        break;
      case 20:
        teachesSubjectsValue = 'System Programming';
        break;
      case 21:
        teachesSubjectsValue = 'Design Patterns';
        break;
      case 22:
        teachesSubjectsValue = 'Data Mining';
        break;
      case 23:
        teachesSubjectsValue = 'Computer Vision';
        break;
      case 24:
        teachesSubjectsValue = 'Geometry View Multiple';
        break;
      case 25:
        teachesSubjectsValue = 'Computer Graphics';
        break;
      case 26:
        teachesSubjectsValue = 'Introduction to Fuzzy Logic';
        break;
      case 27:
        teachesSubjectsValue = 'Introduction to Cryptography';
        break;
      case 28:
        teachesSubjectsValue = 'Data Compression';
        break;
      case 29:
        teachesSubjectsValue = 'Signal and Image Processing ';
        break;
      case 30:
        teachesSubjectsValue = 'Computer Architecture';
        break;
      case 31:
        teachesSubjectsValue = 'Hardware Description Languages';
        break;
      case 32:
        teachesSubjectsValue = 'Digital Systems';
        break;
      case 33:
        teachesSubjectsValue = 'Expert Systems';
        break;
      case 34:
        teachesSubjectsValue = 'Artificial Intelligence';
        break;
      case 35:
        teachesSubjectsValue = 'Programming in C#';
        break;
      case 36:
        teachesSubjectsValue = 'Programming in Java';
        break;
      case 37:
        teachesSubjectsValue = 'Programming in Python';
        break;
      case 38:
        teachesSubjectsValue = 'Programming in JavaScript';
        break;
      case 39:
        teachesSubjectsValue = 'Numerical Analysis';
        break;
      case 40:
        teachesSubjectsValue = 'Numerical algorithms';
        break;
      case 41:
        teachesSubjectsValue = 'Logic Design';
        break;
      case 42:
        teachesSubjectsValue = 'Approximation algorithms';
        break;
      case 43:
        teachesSubjectsValue = 'Secure Quality Programs';
        break;
      case 44:
        teachesSubjectsValue = 'Introduction to Robotics';
        break;
      case 45:
        teachesSubjectsValue = 'Semiconductors';
        break;
      case 46:
        teachesSubjectsValue = 'Electrical Engineering Laboratory';
        break;
      case 47:
        teachesSubjectsValue = 'Semiconductor Devices';
        break;
      case 48:
        teachesSubjectsValue = 'Switching and Logic Design';
        break;
      case 49:
        teachesSubjectsValue = 'Introduction to Linear Systems';
        break;
      case 50:
        teachesSubjectsValue = 'Analog Linear Electronic Circuits';
        break;
      case 51:
        teachesSubjectsValue = 'Energy Conversion';
        break;
      case 52:
        teachesSubjectsValue = 'Signals and Systems';
        break;
      case 53:
        teachesSubjectsValue = 'Electromagnetic Fields';
        break;
      case 54:
        teachesSubjectsValue = 'Digital Circuits';
        break;
      case 55:
        teachesSubjectsValue = 'Introduction to Control Theory';
        break;
      case 56:
        teachesSubjectsValue = 'Laboratory of Logic Digital Circuits';
        break;
      case 57:
        teachesSubjectsValue = 'Communication Engineering';
        break;
      case 58:
        teachesSubjectsValue = 'Electric Drives';
        break;
      case 59:
        teachesSubjectsValue = 'Microprocessors';
        break;
      case 60:
        teachesSubjectsValue = 'Introduction to Microwaves';
        break;
      case 61:
        teachesSubjectsValue = 'Microprocessors Laboratory';
        break;
      case 62:
        teachesSubjectsValue = 'Waves Propagation';
        break;
      case 63:
        teachesSubjectsValue = 'Photonics and Electro-optics systems';
        break;
      case 64:
        teachesSubjectsValue = 'Antennas and Radiation';
        break;
      case 65:
        teachesSubjectsValue = 'Power Systems';
        break;
      case 66:
        teachesSubjectsValue = 'Waves and Distributed Systems';
        break;
      case 67:
        teachesSubjectsValue = 'Conversion Laboratory Energy';
        break;
      case 68:
        teachesSubjectsValue = 'Filter Design';
        break;
      case 69:
        teachesSubjectsValue = 'Power Electronics Systems';
        break;
      case 70:
        teachesSubjectsValue = 'Advanced Control Theory';
        break;
      case 71:
        teachesSubjectsValue = 'High Voltage Engineering';
        break;
      case 72:
        teachesSubjectsValue = 'Digital Signal Processing';
        break;
      case 73:
        teachesSubjectsValue = 'Electronics Computer Aided Design';
        break;
      case 74:
        teachesSubjectsValue = 'Random Signals';
        break;
      case 75:
        teachesSubjectsValue = 'Network Theory';
        break;
      case 76:
        teachesSubjectsValue = 'Neural Networks';
        break;
      case 77:
        teachesSubjectsValue = 'Dynamics and Control Spacecraft';
        break;
      case 78:
        teachesSubjectsValue = 'Modern Optics and Electro optics';
        break;
      case 79:
        teachesSubjectsValue = 'Engineering Economics';
        break;
      case 80:
        teachesSubjectsValue = 'Introduction to Lasers';
        break;
      case 81:
        teachesSubjectsValue = 'Electronic Materials';
        break;
      case 82:
        teachesSubjectsValue = 'Robots Dynamics and Control';
        break;
      case 83:
        teachesSubjectsValue = 'High and Low Voltages Devices';
        break;
      case 84:
        teachesSubjectsValue = 'Receiving and Transmitting Techniques';
        break;
      case 85:
        teachesSubjectsValue = 'Statistics and Probability';
        break;
      case 86:
        teachesSubjectsValue = 'Linear Algebra';
        break;
      case 87:
        teachesSubjectsValue = 'Calculus';
        break;
      case 88:
        teachesSubjectsValue = 'Discrete Mathematics';
        break;
      case 89:
        teachesSubjectsValue = 'Ordinary Differential Equations';
        break;
      case 90:
        teachesSubjectsValue = 'Mathematical Modeling';
        break;
      case 91:
        teachesSubjectsValue = 'Partial Differential Equations';
        break;
      case 92:
        teachesSubjectsValue = 'Complex Valued Functions';
        break;
      case 93:
        teachesSubjectsValue = 'Fourier Series and Integral Transforms';
        break;
      case 94:
        teachesSubjectsValue = 'Introduction to Modern Analysis';
        break;
      case 95:
        teachesSubjectsValue = 'Numerical Analysis';
        break;
      case 96:
        teachesSubjectsValue = 'Algorithm in Optimization';
        break;
      case 97:
        teachesSubjectsValue = 'Machine Learning';
        break;
      case 98:
        teachesSubjectsValue = 'Complex Functions';
        break;
      case 99:
        teachesSubjectsValue = 'Statistical Inference';
        break;
      case 100:
        teachesSubjectsValue = 'Machine Vision';
        break;
      case 101:
        teachesSubjectsValue = 'Forecasting Methods';
        break;
      case 102:
        teachesSubjectsValue = 'Fluid Mechanics';
        break;
      case 103:
        teachesSubjectsValue = 'Mechanics of Solids';
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
