let msg = document.getElementById('msg')


function AtivaTempo(){
  document.getElementById('ActiveTempo').style.display = 'none'
  document.getElementById('tempoL').style.display = 'block'
 
 
}

let numero = ''
function AddTempo(){
let ValorT = document.getElementById('TempoValor').value
if(ValorT != ''){
    numero = ValorT;
}
} 

var Tempo = setInterval(SetTimeEClear,1000)


const ClearTime = () =>{
  clearInterval(Tempo)
}


function SetTimeEClear(){
  let regresiva = document.getElementById('time')
  regresiva.innerHTML = + numero + ' segundos' + ' restantes';
  numero --;
  if(numero === 0){
  msg.style.color = 'red';
  msg.innerHTML = 'Tempo esgotado';
  ClearTime();
  start2();
}
}    



const StartGame = () =>{
//Parando o som de inico
       setTimeout(()=>{
    document.getElementById('soundIntro').pause();
  },0)
    start();
    
//Musica de embaralhar e parando de embaralhar
    soundEmbaralhar()
    EmbaralharEClear();
  
   
//Gerando cor aleatoria depois de tempo
    setTimeout(colors,6000)

//Parando a contagem regressiva // Função inativa


   
}

 


//Começando o jogo e embaralhando
const EmbaralharEClear = ()=>{
    var intervalo = setInterval(embaralhar, 500);
    setTimeout(()=>{
       clearInterval(intervalo);
   },5000)   
}

   

//Carregamento da pagina
window.onload = ()=>{
    let modal = document.getElementById('modal')
    modal.style.animationName = 'animatetop'
   modal.style.animationDuration = '0.4s'
   document.getElementById('soundIntro').play()
   localStorage.removeItem('CorRandom')
}

//som de embaralhar
function soundEmbaralhar(){
  document.getElementById('sound-embaralhar').play()
}

//som de error
function soundError(){
document.getElementById('soundError').play()
}

//Função de start e aparecimento do layout
function start(){
document.getElementById('container-layout').style.display = 'block'
document.getElementById('modal').style.display = 'none'
}
//Funcao inativa da contagem regressiva
const start2 = ()=>{
document.getElementById('modal').style.display = 'block'

}

//Função de embaralhar
function embaralhar(){
let box = document.querySelectorAll('.box')
box[0].style.backgroundColor = 'red'
box[1].style.backgroundColor = 'blue'
box[2].style.backgroundColor = 'black'
box[3].style.backgroundColor = 'aqua'
box[4].style.backgroundColor = 'blueviolet'
box[5].style.backgroundColor = 'chartreuse'
box[6].style.backgroundColor = 'chocolate'
box[7].style.backgroundColor = 'coral'
box[8].style.backgroundColor = 'yellow'

    let style =
    {
        "background-color": "whitesmoke"
    }
    let animation = {
        "animation": "aparece 2s" 
    }
  
    var cards = $(".box");
    for(var i = 0; i < cards.length; i++){
        var target = Math.floor(Math.random() * cards.length -1) + 1;
        var target2 = Math.floor(Math.random() * cards.length -1) +1;
        cards.eq(target).before(cards.eq(target2));     
    }
  
    setTimeout(()=>{
        cards.css(style)
    },5000)
}


//Gerando uma cor aleatoria
let colors = function(){
let color = document.getElementById('color')
let cors =  ['red','blue','black','aqua','blueviolet','chartreuse','chocolate','coral','yellow'];
let cor = Math.floor(Math.random() * cors.length);
let CorFinal = color.style.backgroundColor = cors[cor];

//Salvando a cor Aleatoria gerada
localStorage.setItem('CorRandom', CorFinal)
let Random = localStorage.getItem('CorRandom')

//Validando as Cores
$('.box').click( box =>{
  let caixa = box.target

if(caixa.className == 'box box-1' && CorFinal == 'red'){
  caixa.style.backgroundColor = 'red'
   msg.style.color = 'green'
   msg.innerHTML = 'Voce acertou';
   StartGame();

}else if(caixa.className == 'box box-2' && CorFinal == 'blue'){
  caixa.style.backgroundColor = 'blue'
  msg.style.color = 'green'
  msg.innerHTML = 'Voce acertou';
  StartGame();

}else if(caixa.className == 'box box-3' && CorFinal == 'black'){
  caixa.style.backgroundColor = 'black'
  msg.style.color = 'green'
  msg.innerHTML = 'Voce acertou';
  StartGame();

}else if(caixa.className == 'box box-4' && CorFinal == 'aqua'){
  caixa.style.backgroundColor = 'aqua'
  msg.style.color = 'green'
  msg.innerHTML = 'Voce acertou';
  StartGame();

}else if(caixa.className == 'box box-5' && CorFinal == 'blueviolet'){
  caixa.style.backgroundColor = 'blueviolet'
  msg.style.color = 'green'
  msg.innerHTML = 'Voce acertou';
  StartGame();
}else if(caixa.className == 'box box-6' && CorFinal == 'chartreuse'){
  caixa.style.backgroundColor = 'chartreuse'
  msg.style.color = 'green'
  msg.innerHTML = 'Voce acertou';
  StartGame();

}else if(caixa.className == 'box box-7' && CorFinal == 'chocolate'){
  caixa.style.backgroundColor = 'chocolate'
  msg.style.color = 'green'
  msg.innerHTML = 'Voce acertou';
  StartGame();

}else if(caixa.className == 'box box-8' && CorFinal == 'coral'){
  caixa.style.backgroundColor = 'coral'
  msg.style.color = 'green'
  msg.innerHTML = 'Voce acertou';
  StartGame();

}else if(caixa.className == 'box box-9' && CorFinal == 'yellow'){
  caixa.style.backgroundColor = 'yellow'
  msg.style.color = 'green'
  msg.innerHTML = 'Voce acertou';
  StartGame();
}else{
  msg.style.color = 'red'
  msg.innerHTML = 'Voce errou';
 soundError();
}
});


 


}