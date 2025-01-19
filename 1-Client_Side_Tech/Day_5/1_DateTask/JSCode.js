// 1.1. Show prompt that ask user to enter his birth date and tell user to enter the
// date in the following format (DD–MM–YYYY) ex. 22–01–1999, and then create
// function that take user input as a parameter and ensure that the string is entered
// in this format (that user entered string is 10 characters and contains (-) after the
// second character and after fifth character).[Don't use RegExp, use string
// functions].

function FormatedDateFun(UDate){
    try{ // =>out 
        // SEE ME CONDITiON
        if(UDate.length != 10 || (UDate[2]&&UDate[5] != "-")){
            throw ("Date exsit the limits.");
        }else{
            var SplDate = UDate.split("-"); // [[dd], ]
            console.log(SplDate);
            const date = new Date(SplDate[2],SplDate[1] - 1, SplDate[0]);
            const Format = new Intl.DateTimeFormat("en-US",{
                day: "2-digit",
                month: "short", // Abbreviated month (e.g., Aug)
                year: "numeric",
            });
            console.log("This is the full date " + Format.format(date));   
            alert("This is the full date " + Format.format(date))
        }
    }catch (err){
        console.log(err);
        alert("ERROR! Please, enter date of 10 char");
    }
    
}



do{
    var UserDate = prompt("Please, enter your birthday date. Keep format (DD-MM-YYYY).");
}while(isFinite(UserDate) || UserDate === "" || 
(!(isFinite(UserDate[0]&&UserDate[1]))&& !(isFinite(UserDate[3]&&UserDate[4]))&& !(isFinite(UserDate[6]&&UserDate[7]&&UserDate[8]&&UserDate[9])))); //=> 05-08-2001 dd-mm-yyyy

FormatedDateFun(UserDate);