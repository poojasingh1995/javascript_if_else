// switch let x=require("readline-sync");
// var age=x.question("enter the age"){
//     case 0:
//         (choice == "breakfast") 
//         console.log("Poha\nUpma\nCheela\nSabudana\nIdli\nParathe");
//         break;
//     case 1:
//         (choice == "dinner") 
//         console.log("Rajma\nChole\nAaloo ki sabji\nAaloo began\nBhindi\nGoobhi\nRoti");
//         break;
//     case 2:
//         (choice == "lunch") 
//         console.log("Dal\nChawal\nRoti\nSabji\nPickel\nChatni");
//         break;
//     case 3:
//         console.log("Please enter valid choice")
// }


let readlineSync = require("readline-sync");
var day= readlineSync.question("chose the day:- ")
var time=readlineSync.question("what is the time:-")
if (day=="monday"){
    if(time=="breakfast"){
        console.log("poha")
    }
    else if(time=="lunch"){
        console.log("dal chawal")
    }
    else if(time=="dinner"){
        console.log("rajama chawal roti")
    }
}
else if(day=="tuesday"){
    if(time=="breakfast"){
        console.log("sabudana")
    }
    else if(time=="lunch"){
        console.log("pulav")
    }
    else if(time=="dinner"){
        console.log("chole chawal roti")
    }
}

else if (day=="wednesday"){
    if(time=="breakfast"){
        console.log("parathe saus")
    }
    else if(time=="lunch"){
        console.log("chatni,dal,chawal")
    }
    else if(time=="dinner"){
        console.log("aaloo chawal roti")
    }
}

else if (day=="thursday"){
    if(time=="breakfast"){
        console.log("cheela")
    }
    else if(time=="lunch"){
        console.log("achar,sabji,chawal")
    }
    else if(time=="dinner"){
        console.log("bhindi roti")
    }
}

else if (day=="friday"){
    if(time=="breakfast"){
        console.log("chat")
    }
    else if(time=="lunch"){
        console.log("kadi rice")
    }
    else if(time=="dinner"){
        console.log("paneer chawal roti")
    }
}

else if (day=="saturday"){
    if(time=="breakfast"){
        console.log("upma")
    }
    else if(time=="lunch"){
        console.log("rayta,sabji,chawal")
    }
    else if(time=="dinner"){
        console.log("parval sabji roti")
    }
}

else if (day=="sunday"){
    if(time=="breakfast"){
        console.log("maggiee")
    }
    else if(time=="lunch"){
        console.log("gobi sabji chawal")
    }
    else if(time=="dinner"){
        console.log("aaloo palak roti")
    }
}


 
 