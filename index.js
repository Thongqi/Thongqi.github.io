import confetti from 'https://cdn.skypack.dev/canvas-confetti';


document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById("btn")
  console.log(btn)
  btn.addEventListener("click", makeConfetti)

  
})

function makeConfetti(){
    confetti()
  const vouchers = ['alps', 'azusa']
  const gift = array[Math.floor(Math.random() * vouchers.length)];
  console.log(vouchers[gift])
}
