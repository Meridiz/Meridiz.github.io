
//let a = Math.floor(Math.random() * 100)
let a = 10;
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
    initparticles();
    return(alert('Угадали!'))

  }

}
function initparticles() {
   confetti();
}

function confetti() {
   $.each($(".particletext.confetti"), function(){
      var confetticount = ($(this).width()/50)*10;
      for(var i = 0; i <= confetticount; i++) {
         $(this).append('<span class="particle c' + $.rnd(1,2) + '" style="top:' + $.rnd(10,50) + '%; left:' + $.rnd(0,100) + '%;width:' + $.rnd(6,8) + 'px; height:' + $.rnd(3,4) + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
      }
   });
}

jQuery.rnd = function(m,n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor( Math.random() * (n - m + 1) ) + m;
}
