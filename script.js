
var tempo = 0
var intervalo;

document.getElementById("start-btn").addEventListener("click",function(){

    let tempo_us = parseInt(document.getElementById("tempo_us").value);
   
    if (!isNaN(tempo_us) && tempo_us > 0){
        temporizador(tempo_us);
    }else{
        alert("Insira um numenro mais que 0")
    }

});

function timer() {
    if (tempo >= 0){
        let min = parseInt(tempo/60)
        let seg = tempo%60;
        let smin = min.toString().padStart(2, '0');
        let sseg = seg.toString().padStart(2,'0');

        let mostraTempo = `${smin}:${sseg}`;
        document.querySelector('.cronometro').innerHTML = mostraTempo;

        tempo--;        
       
    } else {
        clearInterval (intervalo);
    }
}
function temporizador(t){
    tempo = t;
    clearInterval(intervalo);
    intervalo = setInterval(timer,1000);
}

