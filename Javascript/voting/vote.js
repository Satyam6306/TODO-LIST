let btnA = document.querySelector(".btn-a")
let btnB = document.querySelector(".btn-b")

let voteAText = document.querySelector(".vote-a")
let voteBText = document.querySelector(".vote-b")

let winner = document.querySelector(".winner")

let a = 0
let b = 0

function increaseA() {
    a++;
    voteAText.textContent = a;
    Comparision();
}

function increaseB() {
    b++;
    voteBText.textContent = b;
    Comparision();
}

function Comparision() {
    if (a > b) {
        winner.textContent = "A is winning";
    } else if (a < b) {
        winner.textContent = "B is winning";
    } else {
        winner.textContent = "Result tie";
    }
}

btnA.addEventListener("click", increaseA)
btnB.addEventListener("click", increaseB)