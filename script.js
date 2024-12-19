var tempo = 0;
var intervalo;

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
    clearInterval = (intervalo);
    intervalo = setInterval(timer,1000);
}

