document.querySelectorAll(".modal").forEach(modals=>{
const firstDiv=modals.querySelector("div").children[0];
firstDiv.classList.add("FirstDiv");
const secondDiv=modals.children[1].children[0];
secondDiv.classList.add("Input-Here")


})