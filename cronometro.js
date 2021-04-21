// JavaScript demonstration
let vai_um=0
let hora=0
let minuto=0
let segundo=0
let imagen=''
function cronometro(button){
 console.log("aqui1")
  document.getElementById("imgsrandon").src= 'https://i.pinimg.com/originals/92/e0/97/92e097f1c70806ce8c22c19b80b9c75e.gif' 
 
setInterval(  doDemo=(button)=>{
 
  if(hora==2){
    console.log("aqui1")
    document.getElementById("imgsrandon").src= 'https://i.pinimg.com/originals/37/05/ce/3705ce2f8a6e83760831e870a5015f5a.gif' 
    minuto=0
    segundo=0
    hora=0
  }
  console.log("Clicou ")
  let square = document.getElementById("square");
  start=true
   
  
  if(segundo==60){
    minuto++;
    segundo=0
  }
  if(minuto==60){
    hora++;
    minuto=0
  }
  
   

  
  document.getElementById("square").innerHTML = "<h1>"+" "+hora+":"+(minuto)+":"+(segundo)+" </h1>";

  segundo++;
   
   
},1);
}
  
 