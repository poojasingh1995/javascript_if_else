let k=require("readline-sync");
var varx=k.question("enter the first num");
var vary=k.question("enter the second num")
if (varx%vary==0){
    console.log("divisible")
}
else{
    console.log("not divisible")
}