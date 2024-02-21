let score = 0; //La variable "score" se inicializa en 0 y se utiliza para llevar la puntuación del jugador.
let time =11000; //La variable "time" se inicializa en 11000 (que significa 11 segundos) y se utiliza para llevar el tiempo restante del juego.
let random = Math.floor(Math.random()*9+1); //La variable "random" se utiliza para generar un número aleatorio que se utiliza para mostrar un topo en una de las casillas.
const audio = new Audio("images/barra.mp3");    //La función "audio" se utiliza para reproducir un sonido cuando el jugador golpea un topo.
let timerID = setInterval(times,1000);  //La variable "timerID" se utiliza para llevar la cuenta del intervalo de tiempo que se establece con "setInterval".

setInterval(showtopo,2000);
setTimeout(()=>{clearInterval(timerID); alert("End of the game")},11500);


function times (){  //La función "times" se llama con "setInterval" para actualizar el tiempo restante del juego y mostrarlo en la página web.
    time = time - 1000;
    document.getElementById('time').innerHTML=time/1000; 
}

function showtopo(){    //La función "showtopo" se llama con "setInterval" para mostrar un topo en una casilla aleatoria. También llama a la función "byeTopo" para borrar el topo que se muestra actualmente antes de mostrar uno nuevo.
    random = Math.floor(Math.random()*9+1);
    document.getElementById(random).src='images/topoPam.jpg'; 

    byeTopo();

    if(random==1){
        document.getElementById('1').src='images/topoSi.jpg';     
    }else if(random==2){
        document.getElementById('2').src='images/topoSi.jpg';
    }else if(random==3){
        document.getElementById('3').src='images/topoSi.jpg';
    }else if(random==4){
        document.getElementById('4').src='images/topoSi.jpg';
    }else if(random==5){
        document.getElementById('5').src='images/topoSi.jpg';
    }else if(random==6){
        document.getElementById('6').src='images/topoSi.jpg';
    }else if(random==7){
        document.getElementById('7').src='images/topoSi.jpg';
    }else if(random==8){
        document.getElementById('8').src='images/topoSi.jpg';
    }else if(random==9){
        document.getElementById('9').src='images/topoSi.jpg';
    } 
}

function byeTopo(){ //La función "byeTopo" se utiliza para borrar el topo que se muestra actualmente en todas las casillas.
    document.getElementById('1').src='images/topoNo.jpg';  
    document.getElementById('2').src='images/topoNo.jpg';
    document.getElementById('3').src='images/topoNo.jpg';
    document.getElementById('4').src='images/topoNo.jpg';
    document.getElementById('5').src='images/topoNo.jpg';
    document.getElementById('6').src='images/topoNo.jpg';
    document.getElementById('7').src='images/topoNo.jpg';
    document.getElementById('8').src='images/topoNo.jpg';
    document.getElementById('9').src='images/topoNo.jpg';
}

function hitTopo(topo){ //La función "hitTopo" se llama cuando el jugador hace clic en una casilla. Si la casilla que el jugador golpeó es la misma que la casilla en la que se muestra actualmente un topo, se agrega 10 puntos a la puntuación del jugador y se reproduce un sonido. Si no es así, se resta 10 puntos a la puntuación del jugador.
    if (random == topo){
        score = score + 10;
        audio.play();  
    }else{
        score = score - 10;
    }
    document.getElementById(topo).src='images/topoPam.jpg';
    document.getElementById('score').innerHTML=score;  
}






