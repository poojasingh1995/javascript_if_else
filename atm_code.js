console.log("Welcome to Central Bank Of India ")
let k=require("readline-sync");
var card=k.question("please enter your card:-");
if (card=="debit" || card=="credit"){
    console.log("please remove your card")
    var language=k.question("please choose your language:\n 1.English\n 2.Hindi:");
    if (language==1){
        console.log("wait processing")
        var pincode=k.question("please enter your 4-digit pin number:-");
        amount=25000
        if (pincode=="7860"){
            console.log("Hello Pooja Singh,your pincode is confidential")
            console.log("1-Withdrawl")
            console.log("2-Balance Enquiry")
            console.log("3-Fast Cash")
            var choice=k.question("please choose your transation:-\n 1.Withdrawl \n 2.Balance Enquiry \n 3.Fast cash:-");
            if (choice=="1"){
                var W=k.question("Enter your withdraw amount:-");
                if(W<amount && W%100==0){
                    console.log("please take your amount:",W)
                    console.log("your transaction is successfully")
                    var reciept=k.question("can you want printed reciept,if needed:Yes,No:-");
                    if (reciept=="Yes"){
                       console.log("your transation is successfully,You Got wonderfull amount")
                    }
                    else if(reciept=="No"){
                       console.log("**Thank**")
                    }
                }
                else{
                    console.log("Invalid cash")
                }
            }
            else if (choice=="2"){
                console.log("your available amount:",amount)
            }
            else if(choice=="3"){
                var current_acount_type=k.question("please enter your acount type \n 1.current acount:- \n 2.saving acount:-")
                if (current_acount_type=="1" && current_acount_type=="2"){
                    console.log("PROCESSING")
                }
                var transation=k.question("select your transation:-\n 1.cash with withdrawl \n 2.balance enquiry:-")
                if (transation=="1"){
                    console.log("<<In process>>")
                    console.log("1->5,000")
                    console.log("2->10,000")
                    console.log("3->15,000")
                    console.log("4->20,000")
                    var f=k.question("enter fast cash option:-\n 1:-\n 2:- \n 3:-\n 4:-");
                    if (f==1 && 5000<amount){
                        console.log("please take cash -5000")
                        console.log("your transaction is successsfully")
                    }
                    else if(f==2 && 10000<amount){
                        console.log("please take cash- 10000")
                        console.log("your transaction is successsfully")
                    }
                    else if(f==3 && 15000<amount){
                        console.log("please take cash -15000")
                        console.log("your transaction is successsfully")
                    }
                    else if(f==4 && 20000<amount){
                        console.log("please take cash -20000")
                        console.log("your transaction is successsfully")
                    }
                    else{
                        console.log("invalid fast cash")
                        console.log("wrong choice")
                    }
                }
                else if(transation=="2"){
                    console.log("your available amount:",amount)
                }
                
            }else{
                console.log("your choice is wrong")
            }
        }
        else{
            console.log("wrong pin number")
       }
    }
    else{
        if (language=="2")
        console.log("प्रतीक्षा प्रक्रिया")
        var pincode=k.question("कृपया अपना 4-अंकों का पिन कोड दर्ज करें:-");
        amount=25000
        if (pincode=="7860"){
            console.log("नमस्कार पूजा सिंह आपका पिन कोड गोपनीय है")
            console.log("1-निकासी")
            console.log("2-बैलेंस पूछताछ")
            console.log("3-तेजी से नकदी")
            var choice=k.question("कृपया अपना लेनदेन चुनें:\n 1.निकासी \n 2.बैलेंस पूछताछ \n 3.तेजी से नकदी:-");
            if (choice=="1"){
                var W=k.question("अपनी निकासी राशि दर्ज करें:-");
                if(W<amount && W%100==0){
                    console.log("कृपया अपनी राशि ले लो:",W)
                    console.log("your transaction is successsfully")
                    var reciept=k.question("क्या आप मुद्रित रसीद चाहते हैं, यदि आवश्यक हो?:\n 1.Yes \n 2.No:-");
                    if (reciept=="Yes"){
                       console.log("आपका लेन-देन सफलतापूर्वक हो गया है, आपको अद्भुत राशि मिली है")
                    }
                    else if(reciept=="No"){
                        console.log("**धन्यवाद**")
                    }
                }
                else{
                    console.log("अवैध नकद")
                }
            }
            else if (choice=="2"){
                console.log("आपकी उपलब्ध राशि:",amount)
            }
            else if(choice=="3"){
                var current_acount_type=k.question("कृपया अपना खाता प्रकार दर्ज करें:- \n 1.चालू खाता:- \n 2.बचत खाता:-")
                if (current_acount_type=="1" && current_acount_type=="2"){
                    console.log("प्रसंस्करण")
                }
                var transation=k.question("अपना लेनदेन चुनें:-\n 1.निकासी के साथ नकद \n 2.बकाया राशी की जांच:-")
                if (transation=="1"){
                    console.log("<<इस प्रक्रिया में>>")
                    console.log("1->5,000")
                    console.log("2->10,000")
                    console.log("3->15,000")
                    console.log("4->20,000")
                    var f=k.question("तेजी से नकद विकल्प दर्ज करें:-\n 1:-\n 2:- \n 3:-\n 4:-");
                    if (f==1 && 5000<amount){
                        console.log("कृपया नकद लें-5000")
                        console.log("आपका लेन-देन सफलतापूर्वक हो गया है")
                    }
                    else if(f==2 && 10000<amount){
                        console.log("कृपया नकद लें- 10000")
                        console.log("आपका लेन-देन सफलतापूर्वक हो गया है")
                    }
                    else if(f==3 && 15000<amount){
                        console.log("कृपया नकद लें -15000")
                        console.log("आपका लेन-देन सफलतापूर्वक हो गया है")
                    }
                    else if(f==4 && 20000<amount){
                        console.log("कृपया नकद लें -20000")
                        console.log("आपका लेन-देन सफलतापूर्वक हो गया है")
                    }
                    else{
                        console.log("अवैध तेजी से नकद")
                        consolelog("गलत विकल्प")
                    }
                }
                else if(transation=="2"){
                    console.log("आपकी उपलब्ध राशि:",amount)
                }
                
            }else{
                console.log("आपका चुनाव गलत है")
            }
        }
        else{
            console.log("गलत पिन नंबर")
        }
    }
}


