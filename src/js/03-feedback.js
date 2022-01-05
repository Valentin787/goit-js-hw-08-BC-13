const  throttle = require('lodash.throttle');
const refs = {
  form: document.querySelector(".feedback-form"),
  input: document.querySelector("input"),
  button: document.querySelector("button")
}

const formData = {};

const STORAGE_KEY = "feedback-form-state";

function onSubmit(event) {
  event.preventDefault();
    console.log(`You email => "${refs.form.email.value}", and your message => "${refs.form.message.value}"`);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY)
  
 }
refs.form.addEventListener("submit", onSubmit)
//==========================================
function onOpenForm(event) {
 
  formData [event.target.name] = event.target.value
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}
refs.form.addEventListener("input", throttle(onOpenForm, 500))

//========================================== 
function saveInfo() {
  const inputInfo = JSON.parse(localStorage.getItem(STORAGE_KEY))
  if (inputInfo) {
    refs.form.email.value = inputInfo.email;
    refs.form.message.value = inputInfo.message;
  }

  
}
saveInfo()

