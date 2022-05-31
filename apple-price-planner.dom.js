const calculatedBtn = document.querySelector(".calculate")
const costs = document.getElementById("box")
const numbers = document.getElementById("number")
const size = document.getElementById("size")
const gain = document.getElementById("profit")

const packets = document.getElementById("packet")
const perApple = document.getElementById("per")
const perPackets = document.getElementById("perPackets")
const apple2 = document.getElementById("apple1")

const  calculatingApple = apples()

calculatedBtn.addEventListener('click', function(){

    costs.innerHTML = calculatingApple.setBoxOfApples()
    numbers.innerHTML = calculatedBtn.setApples()
    size.innerHTML= calculatedBtn.setNumberOfApples()
    gain.innerHTML=calculatedBtn.getProfit()

  packets.innerHTML= packetOne
  perApple.innerHTML =OneApple

  packetOne = calculatedBtn.getOneApple()
    OneApple= calculatedBtn.getOneApple()
    


 
})