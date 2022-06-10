const cards = document.querySelectorAll('.memory-card');

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

function shuffleCard(){
    cards.forEach(card => {
        let shuffle = Math.floor(Math.random()*12);
        card.style.order = shuffle
      })
}