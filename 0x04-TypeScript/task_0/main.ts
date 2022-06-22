interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: 'Hezekiah',
    lastName: 'Okang\'a',
    age: 22,
    location: 'Nairobi',
};
const student2: Student = {
    firstName: 'Faustine',
    lastName: 'China',
    age: 22,
    location: 'Thika',
}
const studentsList: Array<Student> = [
    student1,
    student2,
]
function generateTableHead(table: any, data: any) {
    const thead = table.createTHead();
    const row = thead.insertRow();
    for (const key of data) {
        const th = document.createElement("th");
        const text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th)
    }
}

const table = document.querySelector("table");
const data = Object.keys(studentsList[0]);
generateTableHead(table, data);
