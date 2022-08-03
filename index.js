const cards = document.querySelectorAll(".card");
const mensajeGanado = document.getElementById("mensaje-ganaste");

let dadaVuelta = false;
let bloquar = false;
let primeraCard;
let segundaCard;
let dadasVueltas = [];

function flipCard() {
  if (bloquar) return;
  if (this === primeraCard) return;
  this.classList.add("flip");

  if (!dadaVuelta) {
    //primer click, doy vuelta la card, y no regresa por que ahora es true
    dadaVuelta = true;
    primeraCard = this;
  } else {
    //segunda click
    dadaVuelta = false;
    segundaCard = this;
    //console.log(primeraCard.dataset.par, segundaCard.dataset.par);
    //con dos cards dadas vueltas, hay que verificar que coincidan
    checkMatch();
  }
}

function checkMatch() {
  let isMatch = primeraCard.dataset.par === segundaCard.dataset.par;

  //son match, elimino el evento

  if (isMatch) {
    desabilitarCard();
    juegoGanado();
  } else {
    unFlipCards();
  }
}

function desabilitarCard() {
  primeraCard.removeEventListener("click", flipCard);
  segundaCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unFlipCards() {
  bloquar = true;
  setTimeout(() => {
    primeraCard.classList.remove("flip");
    segundaCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}
function resetBoard() {
  [dadaVuelta, bloquar] = [false, false];
  [primeraCard, segundaCard] = [null, null];
}

(function desordenar() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));

function reset() {
  location.href = "index.html";
}

function juegoGanado() {
  const cardsArray = Array.from(cards);
  console.log(cardsArray);
  let comprobando = cardsArray.every((card) => card.classList.contains("flip"));

  console.log({ comprobando });

  if (comprobando) {
    crearMensaje();
  }
}

function crearMensaje() {
  const mensaje = document.createElement("span");
  mensaje.innerHTML = `
<span id="mensaje-win" class="btn-neon">
<span id="span1"></span>
<span id="span2"></span>
<span id="span3"></span>
<span id="span4"></span>
Felicidades, Ganaste !
<div class="div-btn">
<button class="btn-neon" onclick="reset()" >
    <span id="span1"></span>
    <span id="span2"></span>
    <span id="span3"></span>
    <span id="span4"></span>
    Volver a Jugar
   </button>
 </div>
</span>

`;
  mensajeGanado.appendChild(mensaje);
}
