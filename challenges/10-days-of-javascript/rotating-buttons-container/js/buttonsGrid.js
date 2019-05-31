// jshint esversion:6

btn5.onclick = function() {
  var btn1 = document.getElementById("btn1").innerHTML;
  var btn2 = document.getElementById("btn2").innerHTML;
  var btn3 = document.getElementById("btn3").innerHTML;
  var btn4 = document.getElementById("btn4").innerHTML;
  var btn5 = document.getElementById("btn5").innerHTML;
  var btn6 = document.getElementById("btn6").innerHTML;
  var btn7 = document.getElementById("btn7").innerHTML;
  var btn8 = document.getElementById("btn8").innerHTML;
  var btn9 = document.getElementById("btn9").innerHTML;

  for (let i = 1; i <= 9; i++) {
    let btn = document.getElementById("btn" + i);

    switch (btn.id) {
      case "btn1":
        btn.innerHTML = btn4;
        break;
      case "btn2":
        btn.innerHTML = btn1;
        break;
      case "btn3":
        btn.innerHTML = btn2;
        break;
      case "btn6":
        btn.innerHTML = btn3;
        break;
      case "btn9":
        btn.innerHTML = btn6;
        break;
      case "btn8":
        btn.innerHTML = btn9;
        break;
      case "btn7":
        btn.innerHTML = btn8;
        break;
      case "btn4":
        btn.innerHTML = btn7;
        break;
      default:
        break;

    }
  }
};
