
let a = Math.floor(Math.random() * 100)
function multi(){

  random(document.getElementById('inp_2').value, a)
}


function random(num, a){
  if  (a > num){
    return(alert('Ваше число Меньше вы дебил!'))
  }
  else if  (a < num){
    return(alert('Ваше число Больше вы дебил!'))
  }
  else if  (a == num){
    return(alert('Угадали!'))
  }

}
