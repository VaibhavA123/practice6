let age = prompt("Please enter your age!");
let intValue = parseInt(age);
let avgLife = 100;
if(intValue >= 18 && intValue <= avgLife){
    console.log("adult!");
}else if(intValue === 1 || intValue <18){
    console.log("not adult!")
}else{
    console.log("not valid age");
}