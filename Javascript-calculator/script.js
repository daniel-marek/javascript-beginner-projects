const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btnAdd = document.getElementById("btnAdd");
const input = document.getElementById("input");
const btnClear = document.getElementById("btnClear");
// const input = document.getElementById("input");
// const input = document.getElementById("input");
// const input = document.getElementById("input");


btn1.addEventListener("click", function() {
  input.value += this.innerHTML;
});
btn2.addEventListener("click", function() {
  input.value += this.innerHTML;
});
btn3.addEventListener("click", function() {
  input.value += this.innerHTML;
});
btn4.addEventListener("click", function() {
  input.value += this.innerHTML;
});
btn5.addEventListener("click", function() {
  input.value += this.innerHTML;
});
btn6.addEventListener("click", function() {
  input.value += this.innerHTML;
});
btn7.addEventListener("click", function() {
  input.value += this.innerHTML;
});
btn8.addEventListener("click", function() {
  input.value += this.innerHTML;
});
btn9.addEventListener("click", function() {
  input.value += this.innerHTML;
});

btnAdd.addEventListener("click", function(){
  input.value += "+";
})
btnSubtract.addEventListener("click", function(){
  input.value += "-";
})
btnMultiply.addEventListener("click", function(){
  input.value += "*";
})
btnDivide.addEventListener("click", function(){
  input.value += "/";
})

btnEqual.addEventListener("click", function(){
  input.value = eval(input.value);
})
btnClear.addEventListener("click", function(){
  input.value = "";
})









const one = 1
const two = 2
console.log(one , two)

  
