function ageCheck (age) {
    if (age < 18) {
    return console.log("False")
    } 
    else if (age >= 18) {
    return console.log("True")
    }   
    }


ageCheck (15)   
ageCheck (25)





function ageCheck2 (age) {
    return age <= 18 
}


console.log(ageCheck2(15))  
console.log(ageCheck2(25))      