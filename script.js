var text = [
  "First paragraph text",
  "Second paragraph text",
  "Third paragraph text",
  "Fourth paragraph text",
  "Fifth paragraph text"
];

document.getElementById("button").onclick = function() {
  document.getElementById("result").innerHTML = text[Math.floor(Math.random() * text.length)];
}
