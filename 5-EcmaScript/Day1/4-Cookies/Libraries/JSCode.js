
const name = document.getElementById("name");
const age = document.getElementById("age");
const color = document.getElementById("color");
const submit = document.getElementById("submit");
submit.addEventListener("click", function(e){
    const gender = document.querySelector('input[name="Gender"]:checked');
    setCookie("Name", name.value);
    setCookie("Age", age.value);
    setCookie("Gender", gender.value);
    setCookie("Color", color.value);
    setCookie("LoadingCounter", 0);
});

