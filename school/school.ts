
type Student = {
    name: string;
    surName: string;
    age: number;
    grade: (string | number)[];
}

function extractLength (student: Student){
    const nameLength: number = student.name.length;
    const surNameLength: number = student.surName.length;
    const ageLength: number = student.age.toString().length;
    return nameLength + surNameLength + ageLength
}
function printStudent (student: Student) {
    const { name, surName, age, grade} = student;
    const  amountOfEqual = extractLength(student)
    console.log(name, surName, age);
    console.log("=".repeat(amountOfEqual));
    console.log(grade);
}


const anton: Student  = {
    name: "Anton",
    surName: "Meier",
    age: 16,
    grade: [1,4,3,1,'*',3,'B',1,2,'C',2,'A',3,1,'B',2,5]
}

const stefan: Student  = {
    name: "Stefan",
    surName: "Kloos",
    age: 17,
    grade: [1,4,3,1,'*',3,2,1,2,1,2,'*',2,1,'B',2,1]
}

const hugo: Student  = {
    name: "Hugo",
    surName: "Hauri",
    age: 19,
    grade: ['*','*','*','*',2,1,2,3,'*',3,2,2,'F',1,2,2,3]
}

// @ts-ignore
printStudent(anton);
printStudent(stefan);
printStudent(hugo);