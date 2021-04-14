let clock = document.querySelector('.clock');
let dates = document.querySelector('.date');
function formatDate() {
  let date = new Date();
  let dd = date.getDate()
  if (dd < 10) dd = '0' + dd
  let mm = date.getMonth() + 1
  if (mm < 10) mm = '0' + mm;
  let yy = date.getFullYear()
  if (yy < 10) yy = '0' + yy
  dates.innerHTML = '<span>' + dd + '</span>' + '<span>' + '.' + '</span>' + '<span>' + mm + '</span>' + '<span>' + '.' + '</span>' + '<span>' + yy % 100 + '</span>'
}
formatDate()
setInterval(formatDate,60000)

function time(){
  let date = new Date();
  let second = date.getSeconds()
  if(second < 10) second = '0' + second
  let min = date.getMinutes()
  if(min < 10) min = '0' + min
  let hours = date.getHours()
  if(hours < 10) hours = '0' + hours
  clock.innerHTML = '<span>' + hours + '</span>' + '<span>' +  ':' + '</span>' + '<span>' + min + '</span>' +  '<span>' + ':' + '</span>' + '<span><section class="second">' + second + '</section></span>'
}
setInterval(time,1000)

