
var Tempo = setInterval(SetTimeEClear,1000)

let numero = 31;

const ClearTime = () =>{
    clearInterval(Tempo)
}
  function SetTimeEClear(){
    let regresiva = document.getElementById('time')
    regresiva.innerHTML = + numero + ' segundos' + ' restantes';
    numero --;
    console.log(numero)
    if(numero === 0){
       numero = 30
       ClearTime();
   }
}

