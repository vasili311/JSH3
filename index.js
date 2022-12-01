// TASK 1 ...


function twoAndOthers ( a, b, ...others) {
    let multiple = 1;
        for(i of others){
            multiple *= i;
        }
    
    return [a + b, multiple];

}

console.log(twoAndOthers(1, 4, 5, 6, 4));

// TASK2 ... 

const users = {
    banks :["element1", "element2" , {addres: {city : "Tbilisi"}} ],
};
 const {
    banks: [ ,  ,   { addres: {city}}]
     } = users ;

 console.log(city);

const user = {
    name : 'Vasili',
    lastName: 'Vakhtangishvili',
    city : 'Tbilisi',
    age : 21 ,
    skills : {
        skill1: 'HTML',
        skill2: 'CSS',
        skill3: 'JS',
        other : {
            skill4: 'react',
        },
    },

};

// TASK3...

function newObject(user) {
    let newUser = {};
  for (let filedName in user) {
    if (typeof user[filedName] === "object") {
        newUser[filedName] = user[filedName];
    }
  }
  return newUser;
}
const newUser = newObject(user);

newUser.name = 'Dato',
newUser.lastName = 'Megrelishvili',
newUser.age = '25'
newUser. skill1 = 'Jango'
newUser.skills.other.skill4 = 'Java'

console.log(user.name); // Vasili
console.log(user.lastName); // Vakhtangishvili
console.log(user.age); // 21
console.log (user.skills.skill1); // HTML
console.log(user.skills.skill4); // react

console.log(newUser.name); // Dato
console.log(newUser.lastName); // Megrelishvili
console.log(newUser.age); // 25
console.log(newUser.skill1) // Jango
console.log ( newUser.skills.other.skill4); // Java

console.log (user);
console.log(newUser);


