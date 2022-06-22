export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index:string]: any;
}
export interface Directors extends Teacher {
  numberOfReports: number;
}

export function printTeacher(firstName: string, lastName:string):string {
  return `${firstName.slice(0, 1)}. ${lastName}`;
}


export interface IStudentClassConstructor {
  firstName: string
  lastName: string
}

export interface IStudentClass extends IStudentClassConstructor {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements IStudentClass{
  firstName!: string;
  lastName!: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Curently working';
  }

  displayName() {
    return this.firstName;
  }
} 

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

console.log(printTeacher("John", "Doe"));

const Info = new StudentClass(director1.firstName, director1.lastName);
console.log(Info.workOnHomework());