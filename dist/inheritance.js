"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Writing the test...");
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
let akash = new Student(24, 'Akash', 'Saraf');
akash.takeTest();
let cpsingh = new Teacher('CP', 'Singh');
console.log(cpsingh.fullName);
let sastri = new Principal('MVSSVLN', 'Sastri');
printNames([akash, cpsingh, sastri]);
//# sourceMappingURL=inheritance.js.map