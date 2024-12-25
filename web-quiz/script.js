function getRandomInteger(min, max, type = -1) {
  let random = Math.floor(Math.random() * (max - min)) + min;
  if (type == 0) random = random % 2 == 0 ? random : random - 1 || random + 1;
  if (type == 1) random = random % 2 == 1 ? random : random - 1 || random + 1;
  return random;
}

var a = document.querySelector("#a");
var b = document.querySelector("#b");
var kq = document.querySelector("#kq");

let numa = getRandomInteger(0, 101, 0);
let numb = getRandomInteger(0, 101, 0);
a.innerHTML = numa;
b.innerHTML = numb;
kq.innerHTML = numa + numb;
console.log(a, b);
