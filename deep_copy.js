// Example 1

const obj = { name: 'Version 1', additionalInfo: { version: 1 } };

const deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.name = 'Version 2';
deepCopy.additionalInfo.version = 2;

console.log(obj);
console.log(deepCopy);

// Example 2

let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("Employee=> ", employee);
let newEmployee = JSON.parse(JSON.stringify(employee));

newEmployee.ename = "Beck";
newEmployee.eid = "E103";
newEmployee.salary = 70000;

console.log("New Employee=> ", newEmployee);


