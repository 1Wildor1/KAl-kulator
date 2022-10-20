let myBut = document.querySelector('#knopka')


 myBut.onclick =  function count (){
  let myInp1 = document.querySelector('#inp1');
  let myInp2 = document.querySelector('#inp2');
  let select = document.querySelector('#sell').value;

  myInp1 = document.querySelector('#inp1').value;
  myInp2 =  document.querySelector('#inp2').value;

  switch(select) {
    case "-": 
    document.querySelector('#output').innerHTML = myInp1 - myInp2;
  }

  switch(select) {
    case "/": 
    document.querySelector('#output').innerHTML = myInp1 / myInp2;
  }

}