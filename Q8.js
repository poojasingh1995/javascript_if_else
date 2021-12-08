let k=require("readline-sync");
var water=k.question("enter the water quantity:") ;
if (water<1){
    console.log("more water fill");
}
else if(water>=1 && water<=10){
    console.log("no need to fill water");
}
else {
    console.log("over flow");
}