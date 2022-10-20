let myBut = document.querySelector('#but')

 myBut.onclick = () =>{
  debugger;
  let myInp1 = document.querySelector('#inp1').value;
  let myInp2 = document.querySelector('#inp2').value;
  let select = document.querySelector('#sell').value;
  let output1 = document.getElementById("output");

  switch(select) {
    case "+":
      output1.innerHTML = +myInp1 + +myInp2;
      break;  
    case "*":
      output1.innerHTML = +myInp1 * +myInp2;
      break;
    case "-": 
    output1.innerHTML = +myInp1 - +myInp2;
    break;
    case "/": 
    if(+myInp1 == 0 || +myInp2 == 0){
      alert('гуляй лесом');
      location.reload();
    }
    output1.innerHTML = +myInp1 / +myInp2;
    break;
  }

}