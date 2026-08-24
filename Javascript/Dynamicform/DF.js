const fullname =document.querySelector('#Name')
const email =document.querySelector('#Email')
const password =document.querySelector('#Password')
const age =document.querySelector('#Age')
const Dob =document.querySelector('#dob')
const Ptime =document.querySelector('#Time')
const gender =document.querySelector('.gender')
const course=document.querySelector('#course')
const address =document.querySelector('#address')
const skills =document.querySelector('.Skills')
const file =document.querySelector('#photo')
const terms =document.querySelector('#terms')

// const nameRegex = /^[A-Za-z ]{3,40}$/;

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

// const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

// const form = document.querySelector("form");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const passwordInput = document.querySelector("#password");
// const ageInput = document.querySelector("#age");
// const dobInput = document.querySelector("#dob");
// const addressInput = document.querySelector("#address");
// const timeInput = document.querySelector("#time");
// const courseInput = document.querySelector("#course");
// const photoInput = document.querySelector("#photo");
// const photoBtn = document.querySelector("#uploadBtn");
// const fileName = document.querySelector("#fileName");
// const termsInput = document.querySelector("#terms");
// let students = []
// photoBtn.addEventListener("click", function () {
//   photoInput.click();
// });

// photoInput.addEventListener("change", function () {
//   if (photoInput.files[0].length === 0) {
//     fileName.textContent = "";
//   } else {
//     fileName.textContent = photoInput.files[0].name;
//   }
// });

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   clearErrors();
//   let isValid = true;
//   const name = nameInput.value.trim();
//   const email = emailInput.value.trim();
//   const password = passwordInput.value.trim();
//   const age = Number(ageInput);
//   const dob = dobInput.value;
//   const time = timeInput.value;
//   const address = addressInput.value;
//   const course = courseInput.value;
//   const photo = photoInput.files[0];

//   const genderInput = document.querySelector('input[name="gender"]:checked');
//     let selectedSkill = []
//   const skillsInput = document.querySelectorAll('input[name="skills"]:checked');
//   skillsInput.forEach((skill) => {
//     selectedSkill.push(skill.value)
//   })

//   if (!emailRegex.test(email)) {
//     showErrors("emailError", "Email is not in the desired format");
//     isValid = false;
//   }

//   if (!nameRegex.test(name)) {
//     showErrors("nameError", "Name should be in the correct format");
//     isValid = false;
//   }

//   if (!passwordRegex.test(password)) {
//     showErrors("passwordError", "Password Should be in teh desired Format");
//     isValid = false;
//   }

//   if (age < 15 || age > 60) {
//     showErrors("ageErrors", "Age is not in the correct group");
//     isValid = false;
//   }

//   if (dob === "") {
//     showErrors("dobError", "This cannot be empty");
//     isValid = false;
//   }

//   if (time === "") {
//     showErrors("timeError", "This cannot be empty");
//     isValid = false;
//   }

//   if (address.length < 10) {
//     showErrors("addressError", "Address should be atleast of 10 characters ");
//     isValid = false;
//   }

//   if (course === "") {
//     showErrors("courseError", "Course should have some value");
//     isValid = false;
//   }

//   if (genderInput === "") {
//     showErrors("genderError", "Gender should be selected");
//     isValid = false;
//   }

//   if (skillsInput.length === 0) {
//     showErrors("skillsError", "skill should not be empty");
//     isValid = false;
//   }

//   if (!photo) {
//     showErrors("photoError", "Photo should be selected");
//     isValid = false;
//   }

//   if (!termsInput.checked) {
//     showErrors("termsError", "Terms and condition are not agreed");
//     isValid = false;
//   }
//   if(!isValid){
//     return
//   }
//   let student = {
//     name : name,
//     email : email,
//     age : age,
//     dob : dob,
//     time : time,
//     address : address,
//     course : course,
//     image : URL.createObjectURL(photoInput.files[0]),
//     gender : genderInput.value,
//     studentSkills : selectedSkill,

//   }

//   students.push(student)

//   displayStudents()

//   form.reset()


// });

// function showErrors(id, message) {
//   const errorMessage = document.querySelector(`#${id}`);
//   console.log(errorMessage);
//   errorMessage.textContent = message;
// }

// function clearErrors() {
//   const allErrors = document.querySelectorAll("small");
//   allErrors.forEach((error) => {
//     error.textContent = "";
//   });
// }

// function displayStudents(){
    
// }