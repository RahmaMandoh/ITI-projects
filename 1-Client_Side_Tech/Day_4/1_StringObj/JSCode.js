// 1.1 Write a script to determine whether the entered string is palindrome or not. Ask the
// user whether to consider case of the entered string or not, handle both cases in your
// script i.e. RADAR NOON MOOM are palindrome.
// Note: raDaR is not a palindrome if user requested considering case of entered string.

// function isPalindrom (str){
//     var lift = 0;
//     var right = str.length-1;
//     while(lift < right){
//         if(str[lift] !== str[right]){
//             return false;
//         }

//         lift++;
//         right--;
//     }
//     return true;

// }
// function isPalindromSCase (str){
//     var CStr = str.toLowerCase();
//     console.log(CStr);
//     // call palindromFun from abuve
//     var lift = 0;
//     var right = CStr.length-1;
//     while(lift < right){
//         if(CStr[lift] !== CStr[right]){
//             return false;
//         }

//         lift++;
//         right--;
//     }
//     return true;

// }

// do{
//     var palindromStr = prompt("Please, enter a string to check if it is palindrome or not: ");
// }while( isFinite(palindromStr) || palindromStr === "");

// var bool = confirm("Do you want to consider case of the enterd string!");


// if(bool){
//     if(isPalindromSCase(palindromStr)){
//         alert("It is palindrom string");
//     }else{
//         alert("it is not a palindrom string");
//     }
// }else{
//     if(isPalindrom(palindromStr)){
//         alert("It is palindrom string");
//     }else{
//         alert("it is not a palindrom string");
//     }
// }




// 1.2 write a script that accepts a string from user through prompt and count the number of
// ‘e’ characters in it.

// var UserInput = prompt("Please, enter a string to calculate for you the number of (e) char:");

// var NumOfE = 0;
// for(var i = 0 ; i < UserInput.length ; i++){
//     if(UserInput[i].toLocaleLowerCase() === "e") //=> search for method doing this
//         NumOfE++;
// }

// alert("The number of (e) chars at " + UserInput + " is " + NumOfE );




// 1.3 Write a script that reads from the user his info; validates and displays it with a
// welcoming message.

alert("Please, follow the steps and do the restrictions.");

var NameExp = /^[A-Z][a-z]*$/;
var PhoneExp = /^\d{8}$/;
var MobileExp = /^(010|011|012)\d{8}$/;
var EmailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
do{
    var UserName = prompt("What is your name? Ex: Rahma");
    var NameBool = NameExp.test(UserName);
    // console.log(NameBool);
}while(NameBool != true);

do{
    var UserPhone = prompt("What is your phone number? Ex: 27242825");
    var PhonBool = PhoneExp.test(UserPhone);
}while(PhonBool != true);
// var NUserPhone = parseInt(UserPhone);
do{
    var UserMob = prompt("What is your Mobile number? Ex: 01005066611");
    var MobileBool = MobileExp.test(UserMob);

}while(MobileBool != true);

do{
    var UserEmail = prompt("What is your email? EX:rr@gmail.com");
    var MailBool = EmailExp.test(UserEmail);
}while( MailBool != true);

document.write("<h1>Welcome, " + UserName +"!</h1>");
document.write("<P>Your phone number is " + UserPhone +".</P>");
document.write("<P>Your mobile number is " + UserMob +".</P>");
document.write("<P>Your email is " + UserEmail +".</P>");


