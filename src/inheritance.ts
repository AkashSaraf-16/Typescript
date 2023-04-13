class Person{
 // Parameter property
 constructor(public firstName:string,public lastName:string){}
 get fullName(){
  return this.firstName+' '+this.lastName
 }
 walk(){
  console.log("Walking")
 }
 }

class Student extends Person{
 constructor(public studentId:number,firstName:string,lastName:string){
  super(firstName,lastName)
 }
 takeTest(){
  console.log("Writing the test...")
 }
}

class Teacher extends Person{
 override get fullName(){
  return 'Professor '+super.fullName
 }
}

class Principal extends Person{
 override get fullName(){
  return 'Principal '+super.fullName
 }
}

function printNames(people:Person[]){
 // Polymorphism
 for(let person of people)
  console.log(person.fullName)
}

let akash = new Student(24,'Akash','Saraf')
akash.takeTest()
let cpsingh = new Teacher('CP','Singh')
console.log(cpsingh.fullName)
let sastri = new Principal('MVSSVLN','Sastri')
printNames([akash,cpsingh,sastri])

