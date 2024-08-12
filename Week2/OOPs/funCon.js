//functional constructor
function Employee(id,name,department,salary){
    this.id=id;
    this.name=name;
    this.department=department;
    this.salary=salary;
}
Employee.prototype.displayDetails=function(){
    console.log(`Id: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Department: ${this.department}`);
    console.log(`Salary: ${this.salary}`);
}

const em1= new Employee(1,'Alex','I.T.',78676);
const em2= new Employee(2,'John','Finance',45678);
em1.displayDetails();
em2.displayDetails();

