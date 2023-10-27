const cardArray = [
  {
    name: "popcorn",
    img: "/images/popcorn.png",
  },
  {
    name: "avocado",
    img: "/images/avocado_half.png",
  },
  {
    name: "orange",
    img: "/images/orange.png",
  },
  {
    name: "lollipop",
    img: "images/lollipop.png",
  },
  {
    name: "sandwich",
    img: "images/sandwich.png",
  },
  {
    name: "watermelon",
    img: "/images/watermelon_whole.png",
  },
  {
    name: "sausage",
    img: "images/sausage.png",
  },
  {
    name: "celery",
    img: "images/celery.png",
  },
  {
    name: "carrot",
    img: "images/carrot.png",
  },
  {
    name: "apple",
    img: "images/apple_green.png",
  },

  {
    name: "popcorn",
    img: "/images/popcorn.png",
  },
  {
    name: "avocado",
    img: "/images/avocado_half.png",
  },
  {
    name: "orange",
    img: "/images/orange.png",
  },
  {
    name: "lollipop",
    img: "images/lollipop.png",
  },
  {
    name: "sandwich",
    img: "images/sandwich.png",
  },
  {
    name: "watermelon",
    img: "/images/watermelon_whole.png",
  },
  {
    name: "sausage",
    img: "images/sausage.png",
  },
  {
    name: "celery",
    img: "images/celery.png",
  },
  {
    name: "carrot",
    img: "images/carrot.png",
  },
  {
    name: "apple",
    img: "images/apple_green.png",
  },
];
//   {
//     name: "guess",
//     img: "images/question.png",
//   },
//   {
//     name: "check",
//     img: "images/check.png",
//   },  {
//     name: "guess",
//     img: "images/question.png",
//   },
//   {
//     name: "check",
//     img: "images/check.png",
//   },
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById("grid");
const resultDisplay = document.querySelector("#result");
let cardChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.classList.add("card");
    card.setAttribute("src", "images/question.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  const cards = document.querySelectorAll("img");
  console.log(cards);
  console.log("Check for match");
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/question.png");
    alert("You have clicked the same image");
  } else if (cardChosen[0] == cardChosen[1]) {
    cards[optionOneId].setAttribute("src", "images/check.png");
    cards[optionTwoId].setAttribute("src", "images/check.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/question.png");
    cards[optionTwoId].setAttribute("src", "images/question.png");
  }
  cardChosen = [];
  cardsChosenIds = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations you found them all!";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
