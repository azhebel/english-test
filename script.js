var text = [
  "First paragraph text",
  "Second paragraph text",
  "Third paragraph text",
  "Fourth paragraph text",
  "Fifth paragraph text"
];

function getRandowText() {
  return text[Math.floor(Math.random() * text.length)];
}

document.getElementById("button").onclick = function() {
  document.getElementById("result").innerHTML = getRandomText();
}

let randomWords = [ 'foo', 'bar' ];
let wordDiv = document.getElementById( 'word' );

function randomWord() {
    wordDiv.innerHTML = randomWords[ Math.floor(  Math.random() * randomWords.length ) ];
}
