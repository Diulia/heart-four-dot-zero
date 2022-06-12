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
                message: "Você ganhou a possibilidade de deitar pra assistir bobs burgers comigo mas pegar no sono nos primeiros 10 minutos"
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
                message: "Você ganhou a possibilidade de deitar pra assistir bobs burgers comigo mas pegar no sono nos primeiros 10 minutos"
            },
            {
                id: "serie",
                canMix: true,
                message: "Você ganhou a possibilidade de assistir bobs burgers ou two and a half man comigo"
            }
        ]
    }
]

let result = document.getElementById('resultado');

var cartaUm = null
var cartaDois = null;


function flipCard() {
    //não mexer aqui por enquanto
    if (cartaUm == null) {
        this.classList.toggle('flip');
        cartaUm = this

    } else {
        if (cartaUm.getAttribute('id') === this.getAttribute('id')) {
            resultado.innerHTML = "Você ganhou alguma coisa"
            resultado.style.backgroundColor = '#ec407a';
            resultado.style.color = '#fff'
        }
        if (cartaUm.getAttribute('id') !== this.getAttribute('id')) {
            resultado.innerHTML = "Você não ganhou nada"
            resultado.style.backgroundColor = '#ff0000';
            resultado.style.color = '#fff'
            console.log("mostra o id das cartas: ", cartaUm.id, this.getAttribute('id'))
        }
        this.classList.toggle('flip')
        cartaDois = this

        //não mexer aqui


        if (cartaUm !== null && cartaDois !== null) {
            let cardUmData = cartaUm.querySelector('.front-face').getAttribute('datacard')
            let cardDoisData = cartaDois.querySelector('.front-face').getAttribute('datacard')

            const selectGift = presentes.find((presente) => {
                console.log(cardUmData, cartaUm)
                return presente.id === cardUmData
            })

            const getGift = selectGift.mixWith.find((presente) => {
                return presente.id === cardDoisData
            })

            if (cardUmData === cardDoisData) {
                if(getGift.canMix === true){
                   console.log(cardUmData, cardDoisData)
                resultado.innerHTML = getGift.message
                resultado.style.backgroundColor = "#79ff4d" 
                }
            } 

            if (cardUmData !== cardDoisData){
                if (getGift.canMix === true){
                    console.log(cardUmData, cardDoisData)
                    resultado.innerHTML = getGift.message
                    resultado.style.backgroundColor = "#79ff4d"
                } else{
                    resultado.innerHTML = getGift.message
                }
            }
              cartaUm = null
              cartaDois = null

        }

    }

}





cards.forEach(card => card.addEventListener('click', flipCard));

function shuffleCard() {
    cards.forEach(card => {
        let shuffle = Math.floor(Math.random() * 12);
        card.style.order = shuffle
    })
}
