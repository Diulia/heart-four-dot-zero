let cardElement = document.querySelector(".card");

cardElement.addEventListener("click", flip);

const message =
{
    text: "O dia que eu tomei a melhor decisão: a de ficar e encontrar você"
}


let back = document.getElementById('back')
let backText = document.getElementById('backText')

function flip() {
    cardElement.classList.toggle("flipped")
    backText.innerHTML = message.text
}