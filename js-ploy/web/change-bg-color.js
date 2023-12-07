const colorElem = document.getElementById("color");
const bodyElem = document.body;
const text_colorElem = document.getElementById("textcolor");

window.addEventListener("load", () => {
  bodyElem.style = `background-color: #f00; color: #fff;`;
});

colorElem.addEventListener("input", () => {
  console.log(colorElem.value);
  bodyElem.style = `background-color: ${colorElem.value} ;`;
});

text_colorElem.addEventListener("input", () => {
  console.log(text_colorElem.value);
  bodyElem.style = `background-color: ${colorElem.value} ; color: ${text_colorElem.value} ;`;
});
