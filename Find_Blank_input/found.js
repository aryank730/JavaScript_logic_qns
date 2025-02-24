var form = document.querySelector("form")
var inpt = document.querySelectorAll("input[type='text']")
var h3 = document.querySelector("h3")

form.addEventListener("submit", function(sve){
   sve.preventDefault();
   for (let i = 0; i < inpt.length; i++) {
      if (inpt[i].value.trim() === '') {
         h3.textContent = "some context are empty"
      }else{
         h3.textContent = "your form submitted succesfully"
         h3.style.color = "green";
      }
      
   }
})