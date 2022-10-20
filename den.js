let button = document.getElementById("knopka");

button.onclick = function func() {
  let output1 = document.getElementById("output");
  let inp1 = document.getElementById("inp1").value;
  let inp2 = document.getElementById("inp2").value;
  let sel = document.getElementById("sell").value;

  switch (sel) {
    case "+":
      output1.innerHTML = +inp1 + +inp2;

    case "*":
      output1.innerHTML = +inp1 * +inp2;
  }
};
