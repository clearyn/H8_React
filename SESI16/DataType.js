//Let cant re declare
let playerName = 'Budi';
console.log(`Before ${playerName}`);
playerName = 'Rudi';
console.log(`After ${playerName}`);
{let wow = 'yeah'};

//Var can re declare
var vplayerName = '\n\nBudi';
console.log(`Before ${vplayerName}`);
var vplayerName = 'Rudi';
console.log(`After ${vplayerName}`);
{var vwow = 'no yeah'};

// let cant accessed global
// console.log(`\n${wow}`);
console.log(`\n${vwow}`);


//String manipulation
console.log('\n----String Manipulation----');
const str = `asd def ${12345} ${true}`;
console.log(str);
//Concat
console.log("I"+"Love"+"Code");


//Array
console.log('\n----Array----');
// let numArray = [1, 2, 3, 4, 5, 6, 7]
// let strArray = ["bruh", "what", "happend"]
// let boolArray = [true, false]

// console.log(numArray)
// console.log(strArray)
// console.log(boolArray)

// console.log(numArray)
// numArray.push(11)
// console.log(numArray)
// numArray.pop()
// console.log(numArray)
// numArray.unshift(12)
// console.log(numArray)
// numArray.shift()
// console.log(numArray)

const arr = [
    [1,2,3],
    [321,43,243,123],
    [23,56,34]
];
console.log(arr);
arr[0].shift();
console.log(arr);


//Another example array
console.log('\n----Another example array----');
const students = [
    ['Nico', 'Front end', true],
    ['Ricky', 'Back end', true],
    ['Fauzi', 'Full stack', false]
];

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     console.log(`
//     Halo! nama ${student[0]},
//     saya ${student[1]},
//     dan saya ${!student[2] ? 'bukan' : ''} karyawan probation.`)
// }

students.forEach(student => {
    console.log(`
    Halo! nama ${student[0]},
    saya ${student[1]},
    dan saya ${!student[2] ? 'bukan' : ''} karyawan probation.`)
});


//This keyword
console.log('\n----This keyword----');
console.log(this);
class Whatever{
    //Privte es6
    ability = ['attack', 'run', 'walk'];
    name = 'warria';
    class = 'warrior';
    show(){
        console.log(this);
    }
}
const Warria = new Whatever;
Warria.show();


//Arrow Function
console.log('\n----Arrow Function----');
//cara1
(a) => {
    return a + 100;
}
//cara2
(a) => a + 100;
//cara3
a => a + 100;

//Named function
const sum = (a, b) => a + b;
console.log(sum(1, 45));

//Nest function currying
function curryFunction(a, b){
    const c = a + b
    return function (d){
        console.log(c + d);
    };
};
curryFunction(1, 2)(3);
const anotherFunction = curryFunction(6, 7)(8);
console.log(anotherFunction);

const anotherCurryFunction = (a, b) => (c, d) => (a + b) - (c + d)
console.log(anotherCurryFunction(1, 5)(1, 1));

const addNumber = anotherCurryFunction(1, 5);
console.log(addNumber(1, 1));


//Class
console.log('\n----Class----');
class Polygon{
    constructor(height, width){
        this.area = height * width;
    }
}

console.log(new Polygon(4, 3).area);

//Another way
let pol = new Polygon(3, 3);
console.log(pol.area);


//Destructuring Object
console.log('\n----Destructuring Object----');
const name = "Lukas"
const role = "Full stack developer"

const obj = {
    name: "Eas",
    role: "Full stuck developer",
    age: "wow"
}

const{name: fullname, role: job, ...another} = obj
console.log(name, role)
console.log(fullname, job, another)


//Destructuring Array
console.log('\n----Destructuring Array----');
const [Nico, Ricky, Fauzi] = students
const [namae, ...FauziWithoutName] = Fauzi

console.log({namae, FauziWithoutName})