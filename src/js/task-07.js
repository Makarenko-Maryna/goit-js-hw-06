// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object

// const fontSize = document.querySelector("input#font-size-control");
// function () {

// }

// fontSize.style.fontSize = min
// // span#text

const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('span');

inputEl.addEventListener("input", (event) => {
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
});