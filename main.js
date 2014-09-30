var numOne = document.getElementById("num_one");
var numTwo = document.getElementById("num_two");
var calcButton = document.getElementById("calculateBtn");
var answer;
var result = document.getElementById("answer")


calcButton.onclick = function(){
  answer = parseInt(numOne.value) + parseInt(numTwo.value);
  result.innerHTML = answer;
};
