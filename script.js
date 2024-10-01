//JavaScript tutorial

document.getElementById("changeColor").addEventListener("click", function () {
    const box = document.getElementById("box");
    // Velger en tilfeldig farge fra en liste
    const colors = ["red", "blue", "green", "purple", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
    console.log("Fargen er endret!");
});
