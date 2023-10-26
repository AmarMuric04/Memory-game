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
    img: "images/lollipop",
  },
  {
    name: "sandwich",
    img: "images/sandwich",
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
    name: "guess",
    img: "images/question.png",
  },
  {
    name: "check",
    img: "images/check.png",
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
    img: "images/lollipop",
  },
  {
    name: "sandwich",
    img: "images/sandwich",
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
    name: "guess",
    img: "images/question.png",
  },
  {
    name: "check",
    img: "images/check.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);

const gridDisplay = document.getElementById("grid");
const cardChosen = [];

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

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  console.log("clicked", cardId, cardArray[cardId].name);
  console.log(cardChosen);
}
