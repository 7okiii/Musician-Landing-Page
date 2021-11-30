/////REG MODAL

const regBtn = document.getElementById("regBtn");
const regTimes = document.getElementById("regTimes");
const regModal = document.getElementById("RegModal");
regBtn.addEventListener('click',function(){
    regModal.style.display = "block";
});


regTimes.addEventListener('click',function(){
    regModal.style.display = "none";
});

window.addEventListener('click',function(event){
    var regModal = document.getElementById("RegModal");
    if (event.target == regModal) {
        regModal.style.display = "none";
    }
});

/////color change

$("input").on('blur',function(event){
    if ($(event.target).val() == "") {
        // alert("Please write your" + " " + event.target.placeholder);
        $(event.target).css("background-color","lightBlue");
    }else {
        $(event.target).css("background-color","transparent");
    }
})

/////password
const showPassBtn = document.getElementById("RegShowPass");
const passInput = document.getElementsByClassName("pass");
showPassBtn.addEventListener('click',function(){
    for (var i=0; i<passInput.length; i++) {
        if (passInput[i].type == "password") {
            passInput[i].type = "text";
            showPassBtn.innerHTML = "Hide Password";
        }else {
            passInput[i].type = "password"
            showPassBtn.innerHTML = "Show Password"
        }
    }
})

//check if password are matched 
$("#regSend").on('click',function(){
    if (passInput[0].value != passInput[1].value) {
        alert("Password didn't match");
    }
})

//animation

//validation//

//for first name
$("#RGfirstName").on('blur',function(){
    fnameCheck($("#RGfirstName"));
})

function fnameCheck(input) {
    if (input.val().match(nameRegex)) {
    }else if (input.val() == "") {
    }else {
        alert("Please input correct First name");
    }
}

//for last name
$("#RGlastName").on('blur',function(){
    lnameCheck($("#RGlastName"));
})

function lnameCheck(input) {
    if (input.val().match(nameRegex)) {
    }else if (input.val() == "") {
    }else {
        alert("Please enter your correct Last name")
    }
}

//for email
let emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
$("#RGemail").on('blur',function(){
    emailCheck($("#RGemail"));
})

function emailCheck(input) {
    if (input.val().match(emailRegex)) {
    }else if (input.val() == "") {
    }else {
        alert("Please input correct email address");
        //it can be changing the color for the input box
    }
}

//for phone number 
let telRegex = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
$("#RGtel").on('blur',function(){
    telCheck($("#RGtel"));
})

function telCheck(input) {
    if (input.val().match(telRegex)) {
    }else if (input.val() == "") {
    }else {
        alert("Please enter correct phone number");
    }
}

$("#regSend").on('click',function(){
    fnameCheck($("#RGfirstName"));
    lnameCheck($("#RGlastName"));
    emailCheck($("#RGemail"));
    telCheck($("#RGtel"));
})

/////LOG MODAL

const logBtn = document.getElementById("logBtn");
const logTimes = document.getElementById("logTimes");
const logModal = document.getElementById("LogModal");

logBtn.addEventListener('click',function(){
    logModal.style.display = "block";
});

logTimes.addEventListener('click',function(){
    logModal.style.display = "none";
});

window.addEventListener('click',function(event){
    if (event.target == logModal) {
        logModal.style.display = "none";
    }
});

//Show password

$("#logShowPass").on('click',function(){
    if ($("#LGpass").attr("type") == "password") {
        $("#LGpass").attr("type","text");
        $("#logShowPass").html("Hide Password");
    }else {
        $("#LGpass").attr("type","password");
        $("#logShowPass").html("Show Password"); 
    }
})

//Chose email or phone number 
var radios = $("input[name=login]");
radios.on('click',function(event){
    // console.log($(event.target).attr("id"));
    if ($(event.target).attr("id") == "logEmail") {
        $(".logEmail").css("display","block");
        $(".logTel").css("display","none");
    }else {
        $(".logEmail").css("display","none");
        $(".logTel").css("display","block");
    }
})

//name validation
var nameRegex = /^[a-zA-Z ]{2,30}$/;
$("#login").on('click',function(){
    emailCheck($("#logEmail"));
    if ($("#LGfirstName").val().match(nameRegex) && $("#LGlastName").val().match(nameRegex)) {
    }else {
        alert("Please enter a correct name");
    }
})

