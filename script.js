//JavaScript tutorial
document.getElementById("showName").addEventListener("click", function () {
    const name = document.getElementById("nameInput").value;
    const greetingMessage = `Hei, ${name}!`;
    document.getElementById("greeting").innerText = greetingMessage;
    console.log(greetingMessage);
});
