function JavaScript() {
    
}
let jsDeveloper = new JavaScript();

class Java {

}

let javaDeveloper = new Java();

function Person(name, age){
    this.name = name;
    this.age = age;

    this.getName = () => {
        console.log(this.name)
    }
}

function Employee(name, age, id){
    Person.call(this, name, age);
    this.id = id;
}

Employee.prototype = Object.create(Person.prototype);

let e1 = new Employee("Neha", 24, 234);

console.log(Person.prototype);
console.log(Employee.prototype);

e1.getName();
