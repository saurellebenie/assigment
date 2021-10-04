function addition(A,B){
    return A+B;
}
function multiplication(A,B){
    return A*B;
}   
function soustraction(A,B){
   return A-B;
}
function division(A,B){
    if(A==0){
    console.log('impossible');
}
    else
    return A/B;
}


console.log(division(8,2));
console.log(soustraction(10,2));
console.log(multiplication(10,2));
console.log(addition(10,2));