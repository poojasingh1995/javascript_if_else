let x=require("readline-sync");
var age=x.question("enter the age")
if (age>=5){
    console.log("you can go school")
}
else if(age>=18){
    console.log("you can vote in election")
}
else if(age>=21){
    console.log("you can drive a car")
}
else if (age>=24){
    console.log("you can marry")
}
else if(age>=25){
    console.log("you can legally drink")
}
else{
    console.log("nothing")
}
