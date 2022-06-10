const cards = document.querySelectorAll('.memory-card');

const presentes = [
    {
        id: "front-cat",
        name: 'gato',
        mixWith: [
            {
                id: "front-cat",
                canMix: true,
                message: "A única gatinha da sua vida é a Marie (e eu)"

            },
            {
                id: "queijo",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            },
            {
                id: "massa",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            },
            {
                id: "cobertor",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            },
            {
                id: "cama",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            },
            {
                id: "cobertor",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            }
        ]
    },

    {
        id: "queijo",
        name: 'queijo',
        mixWith: [
            {
                id: "front-cat",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            },
            {
                id: "queijo",
                canMix: true,
                message: "Você ganhou uma semana sem ir no banheiro, entupiu tudo"
            },
            {
                id: "massa",
                canMix: true,
                message: "Você ganhou uma jantinha, provavelmente a carbonara da Paola Carosela"
            },
            {
                id: "cobertor",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            },
            {
                id: "cama",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            },
            {
                id: "serie",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            }
        ]
    },

    {
        id: "massa",
        name: 'massa',
        mixWith: [
            {
                id: "front-cat",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            },
            {
                id: "queijo",
                canMix: true,
                message: "Você ganhou uma jantinha, provavelmente a carbonara da Paola Carosela"

            },
            {
                id: "massa",
                canMix: true,
                message: "Você ganhou uma jantinha, a massa de sua escolha "
            },
            {
                id: "cobertor",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            },
            {
                id: "cama",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            },
            {
                id: "serie",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            }
        ]
    },

    {
        id: "cobertor",
        name: 'cobertor',
        mixWith: [
            {
                id: "front-cat",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            },
            {
                id: "queijo",
                canMix: false,
                message: "Você já não ganhou nada mesmo"

            },
            {
                id: "massa",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            },
            {
                id: "cobertor",
                canMix: true,
                message: "Você ganhou uma cobertinha e um chocolate quente, ou um chá, ou um café"
            },
            {
                id: "cama",
                canMix: true,
                message: "Você ganhou uma sonequinha"
            },
            {
                id: "serie",
                canMix: true,
                message: "Você ganhou a possibilidade de assistir bobs burgers comigo"
            }
        ]
    },

    {
        id: "cama",
        name: 'cama',
        mixWith: [
            {
                id: "front-cat",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            },
            {
                id: "queijo",
                canMix: false,
                message: "Você já não ganhou nada mesmo"

            },
            {
                id: "massa",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            },
            {
                id: "cobertor",
                canMix: true,
                message: "Você ganhou uma cobertinha e um chocolate quente, ou um chá, ou um café"
            },
            {
                id: "cama",
                canMix: true,
                message: "Você ganhou uma sonequinha"
            },
            {
                id: "serie",
                canMix: true,
                message: "Você ganhou a possibilidade de assistir bobs burgers comigo"
            }
        ]
    },

    {
        id: "serie",
        name: 'serie',
        mixWith: [
            {
                id: "front-cat",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            },
            {
                id: "queijo",
                canMix: false,
                message: "Você já não ganhou nada mesmo"

            },
            {
                id: "massa",
                canMix: false,
                message: "Você já não ganhou nada mesmo"
            },
            {
                id: "cobertor",
                canMix: true,
                message: "Você ganhou uma cobertinha e um chocolate quente, ou um chá, ou um café"
            },
            {
                id: "cama",
                canMix: true,
                message: "Você ganhou uma sonequinha"
            },
            {
                id: "serie",
                canMix: true,
                message: "Você ganhou a possibilidade de assistir bobs burgers comigo"
            }
        ]
    }
]

let result = document.getElementById('resultado');

var cartaUm = null
var cartaDois = null;


function flipCard() {
    if (cartaUm == null) {
        this.classList.toggle('flip');
        cartaUm = this
        console.log('mostra o id: ', cartaUm.id, this.getAttribute('id'))

    } else {
        if (cartaUm.getAttribute('id') === this.getAttribute('id')) {
            resultado.style.backgroundColor = '#ffff66';
            resultado.style.color = '#000000'
            resultado.innerHTML = "Gerando presente aguarde"
            console.log("mostra o id das cartas: ", cartaUm.id, this.getAttribute('id'))
        }
        if (cartaUm.getAttribute('id') !== this.getAttribute('id')) {
            resultado.innerHTML = "Você não ganhou nada"
            resultado.style.backgroundColor = '#ff0000';
            resultado.style.color = '#fff'
            console.log("mostra o id das cartas: ", cartaUm.id, this.getAttribute('id'))
        }
        this.classList.toggle('flip')
        cartaDois = this
        console.log(cartaUm.id, cartaDois.id)
    }

}


// function getGiftsCard() {
//     const idPresente = flipCard.cartaUm
//     const idPresente2 = flipCard.cartaDois

//     const selectGift = presentes.find((presente) => {
//         return presente.id === parseInt(idPresente.id)
//     })

//     const getGift = selectGift.mixWith.find((presente) => {
//         return presente.id === parseInt(idPresente2.id)
//     })

//     if (getGift.canMix === true) {
//         resultado.innerHTML = getGift.message
//     } else {
//         resultado.innerHTML = getGift.message
//     }
//     if (cartaUm.getAttribute('id') !== cartaDois.getAttribute('id')) {
//         resultado.innerHTML = getGift.message
//     }

//     if (cartaUm.getAttribute('id') === this.getAttribute('id')) {
//         console.log("mostra o id das cartas: ", cartaUm.id, this.getAttribute('id'))
//         resultado.innerHTML = getGift.message
//     }
// }
cards.forEach(card => card.addEventListener('click', flipCard));

function shuffleCard() {
    cards.forEach(card => {
        let shuffle = Math.floor(Math.random() * 12);
        card.style.order = shuffle
    })
}
