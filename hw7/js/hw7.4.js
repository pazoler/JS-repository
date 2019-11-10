let form = document.forms.lesson;
console.log(form);

let loginInput = form.elements.login;
console.log(loginInput);

let pwdInput = form.elements.pwd;
console.log(pwdInput);

loginInput.addEventListener("focus", focusOnElem);
pwdInput.addEventListener("focus", focusOnElem);

function focusOnElem () {

  this.nextElementSibling.classList.add("error");
}

loginInput.addEventListener("blur", focusOutElem);
pwdInput.addEventListener("blur", focusOutElem);

function focusOutElem() {
  console.log("потеря фокуса на loginInput");
  if (loginInput.value.length < 3 || pwdInput.value.length < 6) {
    this.nextElementSibling.classList.add("error");
  } else {
    this.nextElementSibling.classList.remove("error");
    this.nextElementSibling.classList.add("success");
  }
}

//Отправка формы - вывести значение каждого input в консоль
form.addEventListener("submit", takeForm);
function takeForm (event) {
event.preventDefault();
//1вариант
console.log(loginInput.value);
console.log(pwdInput.value);
//2 вариант
let formData = new FormData(this);
console.log(formData.get("login"));
console.log(formData.get("pwd"));
}

//Очистка полей формы (reset) - все введенные пользователем данные стираются, все подсказки становятся красного цвета.
let span = document.getElementsByClassName("info-block");
form.addEventListener("reset", resetForm); 
function resetForm(event) {
  event.preventDefault();
  loginInput.value = "";
  pwdInput.value = "";
  
  for (elem of span) {
    elem.classList.add("error");
    elem.classList.remove("success");
  }
  

}