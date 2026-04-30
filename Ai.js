function enter() {
  let name = document.getElementById("name").value.trim().toLowerCase();
  let pass = document.getElementById("pass").value.trim().toLowerCase();

  let correctName = "алан";
  let correctPass = "котя";

  if (name === correctName && pass === correctPass) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("letter").classList.remove("hidden");
  } else {
    document.getElementById("hint").innerText = "Ммм… попробуй ещё раз 👀";
  }
}

function openLetter() {
  document.querySelector(".envelope").classList.add("hidden");
  document.getElementById("message").classList.remove("hidden");
}