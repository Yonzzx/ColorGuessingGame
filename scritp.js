let msg = document.getElementById('msg')
function StartGame(){
start();
var intervalo = 
    setInterval(embaralhar, 500 );
  setTimeout(()=>{
    document.getElementById('soundIntro').pause();
  },0)
    soundEmbaralhar()
    setTimeout(()=>{
        clearInterval(intervalo);
    },5000)
    

setTimeout(()=>{
 var time = setInterval(tempo,1000);  

 setTimeout(()=>{
    clearInterval(time)
    msg.style.color = 'red';
    msg.innerHTML = 'Tempo esgotado';
    window.location.href = window.location.href;
 },31000)

},6000)

setTimeout(colors,6000)
}




window.onload = ()=>{
    let modal = document.getElementById('modal')
    modal.style.animationName = 'animatetop'
    modal.style.animationDuration = '0.4s'
    document.getElementById('soundIntro').play()
}

function soundEmbaralhar(){
  document.getElementById('sound-embaralhar').play()
}

function soundError(){
document.getElementById('soundError').play()
}

function start(){
document.getElementById('container-layout').style.display = 'block'
document.getElementById('modal').style.display = 'none'
  
}

function embaralhar(){
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
        setTimeout(()=>{
            cards.css(animation);
            cards.css(style);
        
        
        },5000)
      

    }
 
}




let numero = 30;

 function tempo(){
    let regresiva = document.getElementById('time')
    regresiva.innerHTML = + numero + ' segundos' + ' restantes';
     numero --;
}
let colors = function(){
let color = document.getElementById('color')
let cors =  ['red','blue','black','aqua','blueviolet','chartreuse','chocolate','coral','yellow'];
let cor = Math.floor(Math.random() * cors.length);
let CorFinal = color.style.backgroundColor = cors[cor];

  $('.box').click( box =>{
    let caixa = box.target
  
  if(caixa.className == 'box box-1' && CorFinal == 'red'){
    caixa.style.backgroundColor = 'red'
     msg.style.color = 'green'
     msg.innerHTML = 'Voce acertou';
   

  }else if(caixa.className == 'box box-2' && CorFinal == 'blue'){
    caixa.style.backgroundColor = 'blue'
    msg.style.color = 'green'
    msg.innerHTML = 'Voce acertou';


  }else if(caixa.className == 'box box-3' && CorFinal == 'black'){
    caixa.style.backgroundColor = 'black'
    msg.style.color = 'green'
    msg.innerHTML = 'Voce acertou';
    

  }else if(caixa.className == 'box box-4' && CorFinal == 'aqua'){
    caixa.style.backgroundColor = 'aqua'
    msg.style.color = 'green'
    msg.innerHTML = 'Voce acertou';


  }else if(caixa.className == 'box box-5' && CorFinal == 'blueviolet'){
    caixa.style.backgroundColor = 'blueviolet'
    msg.style.color = 'green'
    msg.innerHTML = 'Voce acertou';
 
  }else if(caixa.className == 'box box-6' && CorFinal == 'chartreuse'){
    caixa.style.backgroundColor = 'chartreuse'
    msg.style.color = 'green'
    msg.innerHTML = 'Voce acertou';
 

  }else if(caixa.className == 'box box-7' && CorFinal == 'chocolate'){
    caixa.style.backgroundColor = 'chocolate'
    msg.style.color = 'green'
    msg.innerHTML = 'Voce acertou';


  }else if(caixa.className == 'box box-8' && CorFinal == 'coral'){
    caixa.style.backgroundColor = 'coral'
    msg.style.color = 'green'
    msg.innerHTML = 'Voce acertou';

  
  }else if(caixa.className == 'box box-9' && CorFinal == 'yellow'){
    caixa.style.backgroundColor = 'yellow'
    msg.style.color = 'green'
    msg.innerHTML = 'Voce acertou';

  }else{
    msg.style.color = 'red'
    msg.innerHTML = 'Voce errou';
   soundError();




 







   
  }
 
 
  });

}