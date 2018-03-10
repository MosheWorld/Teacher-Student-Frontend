export interface TeacherInterface {
    userID: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    age: number;
    rate: number;
    gender: number;
    priceTo: number;
    priceFrom: number;
    image?: String;
    personalMessage: string;
    teachesAt: number;
    teachesSubjects: number[];
    teachesInstitutions: number[];
    recommendations: number[];
}