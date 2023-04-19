const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');
const back = document.querySelector('.container')
const dia = document.querySelector('.dia')
const mes = document.querySelector('.mes')
const ano = document.querySelector('.ano')
const semana = document.querySelector('.semana')




let relogio = setInterval(() => {

  let time = new Date;

  let hr = time.getHours();
  let min = time.getMinutes();
  let seg = time.getSeconds();


  if(hr < 10) hr = '0' + hr;
  if(min < 10) min = '0' + min;
  if(seg < 10) seg = '0' + seg;

 

  
  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = seg;

  let d = time.getDate();
  let m = time.getMonth() + 1;
  let a = time.getFullYear();

  if(d < 10) d = '0' + d;
  if(m < 10) m = '0' + m;

  dia.textContent = d;
  mes.textContent = m;
  ano.textContent = a;


  let s = time.getDay();
  const weekDay = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  semana.textContent = weekDay[s];
 
}, 1000)


 






