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
