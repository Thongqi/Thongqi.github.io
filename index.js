import confetti from 'https://cdn.skypack.dev/canvas-confetti';


document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById("btn")
  console.log(btn)
  btn.addEventListener("click", makeConfetti)

  
})

function makeConfetti(){
  document.getElementById('video').play()
  document.getElementById('video').addEventListener('ended',myHandler,false);
  
}

function myHandler (e){
  document.getElementById('video').classList.add('d-none')
  const vouchers = ['alps', 'azusa'];
  const gift = Math.floor(Math.random() * vouchers.length);
  console.log(vouchers[gift])
  var show = vouchers[gift];
  document.getElementById(show).classList.remove('d-none')
   document.getElementById("msg").classList.remove('d-none')
  document.getElementById("btn").classList.add('d-none')
  setTimeout(confetti(), 6000);
}