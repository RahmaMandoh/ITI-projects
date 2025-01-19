// Create a simple form with Add and Reset buttons takes user`s information (name age and email)
//  with validation for each field and all fields are required.
// Every time the user enters a right data and press Add button the data is displayed in the table as shown in fig 3
// var Input = document.querySelectorAll("input");

var NameInput = document.getElementById("NameInput");
var AgeInput = document.getElementById("AgeInput");
var EmailInput = document.getElementById("EmailInput");
var AddBTN = document.getElementById("Addbtn");
var Resetbtn = document.getElementById("Resetbtn");


NameInput.addEventListener("input", function(){
    this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
});
AgeInput.addEventListener("input", function(){
    this.value = this.value.replace(/[^0-9]/g, "");
});
EmailInput.addEventListener("blur", function(){
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(this.value)) {
        alert("Please enter a valid email address.");
        this.focus();
    }
});
AddBTN.addEventListener("click", function(){
    var nameValue = NameInput.value.trim();
    var ageValue = AgeInput.value.trim();
    var emailValue = EmailInput.value.trim();

    if (!nameValue || !ageValue || !emailValue) {
        alert("All fields are required.");
        return;
    }

    console.log("Name:", nameValue);
    console.log("Age:", ageValue);
    console.log("Email:", emailValue);
});


Resetbtn.addEventListener("click", function () {
    NameInput.value = "";
    AgeInput.value = "";
    EmailInput.value = "";
    console.log("Form reset completed.");
});