let number,
  that = "empty",
  result = { win: 0, lose: 0 };

const start = () => {
  let input = document.getElementById("count").value,
    count = parseInt(input);

  number = random(count);
  createHands(count);
  backTo("game");
};

const random = (max = 3) => Math.floor(Math.random() * (max - 0) + 0);

const createHands = (from = 3) => {
  for (let i = 0; i < from; i++) createHand(i);
};

const createHand = (index = 0) => {
  let div = document.createElement("div"); // <div></div>
  div.className = "fist"; // <div class="fist"></div>
  div.onclick = () => validate(div, index);
  document.querySelector("section#game div.hands").appendChild(div);
};

const validate = (div, index = 0) => {
  if (that == "full" && index == number) {
    win();
  } else if (
    (that == "full" && index != number) ||
    (that == "empty" && index == number)
  ) {
    lose();
    was();
  } else {
    // <div class="fist"></div>
    open(div);
    // <div class="hand"></div>
  }
};

const clear = () => {
  document.querySelector("section#game div.hands").innerHTML = "";
};

const backTo = (what = "") => {
  let opposite = what == "menu" ? "game" : "menu";
  document.getElementById(what).style.display = "flex";
  document.getElementById(opposite).style.display = "none";
};

const win = () => {
  alert("You win :)");
  result.win += 1;
  bye();
};

const lose = () => {
  alert("You lose :(");
  result.lose += 1;
  bye();
};

const open = (div) => {
  div.className = "hand";
};

const was = () => {
  alert(`Correct hand was ${number + 1} from right :D`);
};

const bye = () => {
  backTo("menu");
  clear();
  update();
};

const update = () => {
  document.getElementById("result-win").innerText = result.win;
  document.getElementById("result-lose").innerText = result.lose;
};
