// const cardArray = [
//     {
//         name: 'Nobita',
//         img: '11.jpg',
//     },
//     {
//         name: 'Jian',
//         img: "8.jpg",
//     },
//     {
//         name: "Shizuka",
//         img: "6.jpg"
//     },
//     {
//         name: "Doraemon",
//         img: "3.jpg"
//     },
//     {
//         name: "Sunio",
//         img: "7.jpg"
//     },
//     {
//         name: "Monkey",
//         img: "12.jpg",
//     },
//     {
//       name: 'Nobita',
//       img: '11.jpg',
//     },
//     {
//       name: 'Jian',
//       img: "8.jpg",
//   },
//   {
//       name: 'Shizuka',
//       img: "6.jpg",
//   },
//   {
//       name: "Doraemon",
//       img: "3.jpg",
//   },
//   {
//       name: "sunio",
//       img: "7.jpg",
//   },
//   {
//       name: "Monkey",
//       img: "12.jpg",
//   },
  
// ]

// cardArray.sort(() => 0.5 - Math.random()) 



// const gridDisplay = document.querySelector("#grid")

// function createBoard () {
//     for (let i = 0; i < cardArray.length; i++) {
//         const card = document.createElement("img")
//         card.setAttribute("src", "ggggggggggg/2.jpg")
//         card.setAttribute("data-id", i)
//         gridDisplay.appendChild(card)
//     }
// }

// createBoard()



const cardArray = [
    {
        name: 'Nobita',
        img: 'gggggggggggg/11.jpg',
    },
    {
        name: 'Jian',
        img: "gggggggggggg/8.jpg",
    },
    {
        name: "Shizuka",
        img: "gggggggggggg/6.jpg"
    },
    {
        name: "Doraemon",
        img: "gggggggggggg/3.jpg"
    },
    {
        name: "Sunio",
        img: "gggggggggggg/7.jpg"
    },
    {
        name: "Monkey",
        img: "gggggggggggg/12.jpg",
    },
    {
      name: 'Nobita',
      img: 'gggggggggggg/11.jpg',
    },
    {
      name: 'Jian',
      img: "gggggggggggg/8.jpg",
  },
  {
      name: 'Shizuka',
      img: "gggggggggggg/6.jpg",
  },
  {
      name: "Doraemon",
      img: "gggggggggggg/3.jpg",
  },
  {
      name: "sunio",
      img: "gggggggggggg/7.jpg",
  },
  {
      name: "Monkey",
      img: "gggggggggggg/12.jpg",
  },
  
]


cardArray.sort(() => 0.5 - Math.random())


const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []




function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'gggggggggggg/2.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
const cards = document.querySelectorAll('img')
const optionOneId = cardsChosenIds[0]
const optionTwoId = cardsChosenIds[1]

console.log(cards)

    console.log('check for match')
if(optionOneId === optionTwoId) {
    cards[optionOneId].setAttribute('src', 'gggggggggggg/2.jpg')
    cards[optionTwoId].setAttribute('src', 'gggggggggggg/2.jpg')
    alert('you have clicked the same image!')
}


   if (cardsChosen[0] === cardsChosen[1]){
    alert('you found a match')
    cards[optionOneId].setAttribute('src', 'gggggggggggg/1.png')
    cards[optionTwoId].setAttribute('src', 'gggggggggggg/1.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    
    cardsWon.push(cardsChosen)

   } else {
    cards[optionOneId].setAttribute('src', 'gggggggggggg/2.jpg')
    cards[optionTwoId].setAttribute('src', 'gggggggggggg/2.jpg')
    alert ('Sorry, try again!')


   }



   resultDisplay.textContent = cardsWon.length
cardsChosen = []
cardsChosenIds = []
 
if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations you found them all!'
}


}


function flipCard() {
   
   const cardId = this.getAttribute('data-id')
   
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
       
       this.setAttribute('src', cardArray[cardId].img)
       if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
       }

}