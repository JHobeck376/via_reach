window.addEventListener("load", function(){
  document.getElementById("done").onclick = validateEverything;
})

function validateEverything() {
  validateFirstName();
  validateLastName();
  validateAge();
}

function validateFirstName() {
  var nameFirst = document.getElementById("fName");
  if(nameFirst.validity.valueMissing){
    nameFirst.setCustomValidity("Please enter your First Name");
  }else{
    nameFirst.setCustomValidity("");
  }
}

function validateLastName() {
  var nameLast = document.getElementById("lName");
  if(nameLast.validity.valueMissing){
    nameLast.setCustomValidity("Please enter your Last Name");
  }else{
    nameLast.setCustomValidity("");
  }
}

function validateAge() {
 var age = document.getElementById("age");
 if(age.selectedIndex === 0){
   age.setCustomValidity("Please select your age");
 }else{
   age.setCustomValidity("");
 }
}
