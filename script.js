//JavaScript tutorial
document.getElementById("generateList").addEventListener("click", function () {
    const list = document.getElementById("list");
    list.innerHTML = ""; // Tømmer listen hvis den allerede har elementer

    const items = ["Eple", "Banan", "Appelsin", "Druer", "Jordbær"];

    for (let i = 0; i < items.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = items[i];
        list.appendChild(listItem);
        console.log(items[i]);
    }
});
