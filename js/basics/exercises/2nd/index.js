const task3Element = document.getElementById("task-3");

const firstAlert = () => alert("first");
const secondAlert = (name) => alert(name);
const text = (first, second, third) => `${first}${second}${third}`;

firstAlert();
secondAlert("Andrew");
secondAlert(text("x", "d", "e"));

task3Element.addEventListener("click", firstAlert);
