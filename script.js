setInterval( function(){
    let clock = document.getElementsByClassName('clock')[0]
    let dia = document.getElementById('dia')
    let rel = new Date()
    let diaS = rel.getDate()            
    if(diaS < 10){
        diaS = '0' + diaS
    }
    let diaM = rel.getDay()
    let mes = rel.getMonth()
    let ano = rel.getFullYear()
    let hora = rel.getHours()
    if(hora < 10){
        hora = `0${hora}`
    }
    let min = rel.getMinutes()
    if(min < 10){
        min = '0' + min
    }
    let sec = rel.getSeconds()
    if(sec < 10){
        sec = '0' + sec
    }
    let diaSemanaArr = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta', 'Sábado']
   
    let mesArray= ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]

    if(diaM === 0 || diaM === 6){
        dia.innerHTML = `${diaSemanaArr[diaM]}, ${diaS} de ${mesArray[mes]} do ano de ${ano}`
    }else{
        dia.innerHTML = `${diaSemanaArr[diaM]}-Feira , ${diaS} de ${mesArray[mes]} de ${ano}.`
    }

    clock.innerHTML = ` ${hora}:${min}:${sec}`    

})