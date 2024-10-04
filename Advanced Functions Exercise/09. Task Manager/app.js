function solve() {
    const taskEl = document.querySelector("#task");
    const descriptionEl = document.querySelector("#description");
    const dateEl = document.querySelector("#date");
    const addButtonEl = document.querySelector("#add");

    addButtonEl.addEventListener("click", (event) => {
        const taskValue = taskEl.value;
        const descriptionValue = descriptionEl.value;
        const dateValue = dateEl.value;
        event.preventDefault();

        
        if (!taskValue || !descriptionValue || !dateValue) return;
        createOpenCard(taskValue, descriptionValue, dateValue)
    });
        
    function createOpenCard(taskValue, descriptionValue, dateValue) {
        const openDiv =
            document.querySelector(".orange").parentElement.parentElement
                .children[1];
        const article = document.createElement("article");
        openDiv.appendChild(article);
        const h3 = document.createElement("h3");
        h3.textContent = taskValue;
        const p1 = document.createElement("p");
        p1.textContent = descriptionValue;
        const p2 = document.createElement("p");
        p2.textContent = dateValue;
        article.append(h3, p1, p2);
        const buttonsDiv = document.createElement("div");
        openDiv.appendChild(buttonsDiv);
        buttonsDiv.classList.add("flex");
        const startBtn = document.createElement("button");
        startBtn.classList.add("green");
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("red");
        buttonsDiv.append(startBtn, deleteBtn);
        startBtn.addEventListener("click", () => {
            console.log("Start");
        });
        deleteBtn.addEventListener("click", () => {
            console.log("Delete");
        });
   }
}
