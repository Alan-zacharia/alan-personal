
// function validateForm() {
//   var name = document.getElementById("name").value;
//   var mobilenumber = document.getElementById("mobilenumber").value;
//   var email = document.getElementById("email").value;
//   var subject = document.getElementById("subject").value;
//   var message = document.getElementById("message").value;
//   var msg1 = document.getElementById("msg1")

//   if (name =="") {
    
//     ("please type your name");
//      setTimeout(function () {
//       msg1.innerHTML = ""
//     }, 5000)
//     return false;
//   }else if (/\d/.test(name)) {
    
//     alert('test must be characters');
//     setTimeout(function () {
//       msg1.innerHTML = ""
//     }, 5000)
//     return false;
//   }

//   if (mobilenumber == "") {
   
//     alert('please fill mobile number');
//     setTimeout(function () {
//       msg1.innerHTML = ""
//     }, 5000)
//     return false;
//   }
  
//   if (mobilenumber.length < 10 || mobilenumber.length > 10) {
    
//     alert('number must have 10 digits ');
//     setTimeout(function () {
//       msg1.innerHTML = ""
//     }, 5000)
//     return false;
//   }

//   var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (!emailRegex.test(email)) {
    
//     alert("email must be a valid email address");
//     setTimeout(function () {
//       msg1.innerHTML = ""
//     }, 5000)
//     return false;
//   }

//   if (subject == "") {
    
//    alert( "Subject must be filled out")
//     setTimeout(function () {
//       msg1.innerHTML = ""
//     }, 5000)
//     return false;
//   }


//   if (message == "") {
//      alert("Message must be filled out")
//     setTimeout(function () {
//       msg1.innerHTML = ""
//     }, 5000)
//     return false;
//   }

//   return true;
// }
var nameError=document.getElementById('name-error')
var mobileError=document.getElementById('mobile-error')
var emailError=document.getElementById('email-error')
var subjectError=document.getElementById('subject-error')
var messageError=document.getElementById('message-error')

function validateName(){  
  var name=document.getElementById('contact-name').value
     if(name.length==0){
      nameError.innerHTML="Name is required";
      return false;
     } 
     if(!name.match((/^[A-Za-z]*$/))){
      nameError.innerHTML="Write Full name";
      return false;
     }
     nameError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #37eb05;"></i>';
     return true;
}
function validateMobile(){  
  var mobile=document.getElementById('contact-mobilenumber').value

  if(mobile.length==0){
    mobileError.innerHTML="phone number is required";
    return false;
   } 
  
   if(!mobile.match(/^[0-9]{10}$/)){
    mobileError.innerHTML="please enter your mobile number";
    return false;
   }
   
   if(mobile.length!=10){
    mobileError.innerHTML='phone number should be 10 digits';
    return false;
   }
   mobileError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #37eb05;"></i>';
   return true;
}

function validateEmail(){  
  var email=document.getElementById('contact-email').value
      if(email.length==0){
        emailError.innerHTML="Email is required"
        return false;
      }
      if (!/^[\w.-]+@[A-Za-z]+\.[a-z]{2,3}$/.test(email)) {
        emailError.innerHTML = 'Email invalid';
        return false;
      }
      emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #37eb05;"></i>';
}
function validateSubject(){  
  var subject=document.getElementById('contact-subject').value
  if(subject.length==0){
    subjectError.innerHTML="subject is required";
    return false;
   } 
   if(!subject.match((/^[A-Za-z]*$/))){
    subjectError.innerHTML="please enter characters";
    return false;
   }
   subjectError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #37eb05;"></i>';
   return true;

}
function validateMessage(){
  var message=document.getElementById('contact-message').value;
  var required=30;
  var left=required -message.length;
  if(left>0){
      messageError.innerHTML= left + 'more characters required';
      return false;
  }
  messageError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #37eb05;"></i>';
  return true;
}




const scriptURL = 'https://script.google.com/macros/s/AKfycbwN0Py2bTGINrK2zW-4vnHySqFED4JK4AHCampnqUgz5ijaduSKP7J4FxED7hLRJbOH/exec'
const form = document.getElementById("form")
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault();
  const isValid = validateName(); 
  const phoneValid = validateMobile();
  const emailValid = validateEmail();
  const subjectValid = validateSubject();                                 // Call validateForm() once and store the result.
  const messageValid = validateMessage();                                 // Call validateForm() once and store the result.
  if (!isValid || !phoneValid || !emailValid || !subjectValid || !messageValid) {

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.innerHTML = "Sent Successfully";
        alert("Sent Successfully");
        setTimeout(function () {
          msg.innerHTML = "";
        }, 3000);
        form.reset();
        subjectError.innerHTML=''
        nameError.innerHTML=''
        mobileError.innerHTML=''
        messageError.innerHTML=''
        emailError.innerHTML =''
      })
      .catch(error => console.error('Error!', error.message));
  }
});


