const escritura = document.getElementById("reloj")
const decena = 10;


const getHora = ()=>{
    const fecha = new Date();
    console.log(fecha)
    const tiempo={
        hora : fecha.getHours(),
        minuto : fecha.getMinutes(),
        segundo : fecha.getSeconds(),
    }
    console.log(tiempo)
    if(tiempo.hora < decena){
        tiempo.hora = "0"+tiempo.hora
    }
    if(tiempo.minuto < decena){
        tiempo.minuto = "0"+tiempo.minuto
    }
    if(tiempo.segundo < decena){
        tiempo.segundo = "0"+tiempo.segundo
    }
    const ahora = tiempo.hora+":"+tiempo.minuto+":"+tiempo.segundo;
    console.log(ahora)
    escritura.textContent = ahora;

    
}

setInterval(getHora,300)