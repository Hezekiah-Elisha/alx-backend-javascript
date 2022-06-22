export interface DirectorInterface {
    workFromHome(): string;
    workDirectorTasks(): string;
    [getCoffeeBreak: string]: any;
}
export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}
export class Director implements DirectorInterface{
    workFromHome(): string {
        return "Working from home";
    }
    getToWork() {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}
export class Teacher implements TeacherInterface{
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return 'cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

export function createEmployee(salary:(number | string)): (Director | Teacher) {
    if (typeof salary == 'number' && salary < 500) {
        return new Teacher;
    }
    return new Director;
}

export function isDirector(employee:(Director | Teacher)){
    return employee instanceof Director;
}

export function executeWork(employee:(Director | Teacher)){
    if (isDirector(employee)){
        return (employee as Director).workDirectorTasks();
    }
    return (employee as Teacher).workTeacherTasks();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));