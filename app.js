const nameText = document.querySelector(".name-text")
// console.log();
const strText = nameText.textContent;
const splitText = strText.split("")
nameText.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    nameText.innerHTML += "<span>" + splitText[i] + "</span>"
    
}
console.log(nameText);

let char = 0;
let timer = setInterval(onTick, 50)

function onTick() {
    const span = nameText.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}