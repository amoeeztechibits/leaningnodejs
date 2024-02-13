// Example 1
const obj = { name: 'Version 1', additionalInfo: { version: 1 } };

const shallowCopy1 = { ...obj };
const shallowCopy2 = Object.assign({}, obj);

shallowCopy1.name = 'Version 2';



shallowCopy2.name = 'Version 3';
shallowCopy2.additionalInfo.version = 4;

console.log(obj); 
console.log(shallowCopy1);
console.log(shallowCopy2);


// Example 2


let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
 
console.log("Employee=> ", employee);
let newEmployee = employee;    
console.log("New Employee=> ", newEmployee);
 

newEmployee.ename = "Beck";
newEmployee.eid = "E103";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

