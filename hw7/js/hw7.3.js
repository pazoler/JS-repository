let form = document.forms.lesson;
console.log(form);


let checkBBox = form.elements.unableWrite;
console.log(checkBBox);

 
 checkBBox.addEventListener("click", textCheck); 
  console.log(checkBBox.checked);

  function textCheck () {
    if (checkBBox.checked) {
      this.parentNode.nextElementSibling.disabled = false;
    } else if (!checkBBox.checked) {
      this.parentNode.nextElementSibling.disabled = true;
    }
  }

