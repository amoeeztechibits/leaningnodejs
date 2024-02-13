function sum(a,b,c){
    if(typeof(a) == 'string')
    {
        return a+" : "+b+" : "+c;    
    }
    return a+b+c;
}
let characters = ['a','b','c'];
let numbers = [1,2,3];
console.log(sum(...characters),":- ",sum(...numbers));


// Example 2
function now()
{
    let current_date = new Date().getFullYear();
    return current_date;
}

const dateFields = [now(), 1, 100]; 
const d = new Date(...dateFields);

console.log(d);



// Example 3

let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
console.log(arr1);