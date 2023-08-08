/* Variáveis */
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const pressCookie = document.querySelector("#cookie")
const pressCookie2 = document.querySelector("#cookie2")
const btnReset = document.querySelector("#btnReset")
const myP = document.getElementById("rPhrases")


//Eventos
pressCookie.addEventListener('click', changeScreen)
btnReset.addEventListener('click', changeScreen)
pressCookie2.addEventListener('click', callTwo)



//funções
const phrases = [
  "Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe.",
  "Que os meus sonhos me levem para onde o meu coração possa ser feliz. 💖 ",
  "O meu maior professor será sempre o meu maior erro.",
  "Quando nada é seguro, tudo é possível. 😉",
  "Tem coisas que Deus dá para a gente aprender. E tem coisas que Deus só dá quando a gente aprende. 🙏",
  "O que sabemos é uma gota; o que ignoramos é um oceano."
]

let randomPhrases 
function createPhrases(){
  randomPhrases = Math.round(Math.random() * phrases.length)
  myP.innerText = phrases[randomPhrases]
}

function changeScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function anim () {
  myP.style.animation = "fadeToTop 1.8s cubic-bezier(0.67, 0.44, 0.34, 0.82) forwards";
}

function callTwo () {
  createPhrases()
  anim()
}










