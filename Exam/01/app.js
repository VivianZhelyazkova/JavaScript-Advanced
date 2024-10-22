window.addEventListener("load", solve);

function solve() {
    const addActivityButtonEl = document.querySelector("#add-activity");
    addActivityButtonEl.addEventListener("click", () => {
        const typeEl = document.querySelector("#type");
        const intensityEl = document.querySelector("#intensity");
        const caloriesEl = document.querySelector("#calories");
        const durationEl = document.querySelector("#duration");
        const dateEl = document.querySelector("#date");
        const type = typeEl.value;
        const intensity = intensityEl.value;
        const calories = caloriesEl.value;
        const duration = durationEl.value;
        const date = dateEl.value;
        if (!type || !intensity || !calories || !duration || !date) {
            return;
        }
        addActivityButtonEl.disabled = true;
        typeEl.value = "";
        intensityEl.value = "";
        caloriesEl.value = "";
        durationEl.value = "";
        dateEl.value = "";
        const previewActivityEL = document.querySelector("#preview-activity");
        const listItemEl = document.createElement("li");
        previewActivityEL.appendChild(listItemEl);
        const articleEl = document.createElement("article");
        listItemEl.appendChild(articleEl);
        const activityPar = document.createElement("p");
        activityPar.textContent = `Activity: ${type}`;
        const intensityPar = document.createElement("p");
        intensityPar.textContent = `Intensity: ${intensity}`;
        const caloriesPar = document.createElement("p");
        caloriesPar.textContent = `Calories: ${calories}`;
        const durationPar = document.createElement("p");
        durationPar.textContent = `Duration: ${duration} min.`;
        const datePar = document.createElement("p"); // TODO
        datePar.textContent = `Date: ${date}`;
        articleEl.appendChild(activityPar);
        articleEl.appendChild(intensityPar);
        articleEl.appendChild(durationPar);
        articleEl.appendChild(datePar);
        articleEl.appendChild(caloriesPar);

        const divEl = document.createElement("div");
        divEl.className = "btn-container";
        listItemEl.appendChild(divEl);
        const editButtonEl = document.createElement("button");
        const nextButtonEl = document.createElement("button");
        divEl.appendChild(editButtonEl);
        divEl.appendChild(nextButtonEl);
        editButtonEl.className = "edit-btn";
        nextButtonEl.className = "next-btn";
        editButtonEl.textContent = "Edit";
        nextButtonEl.textContent = "Next";

        editButtonEl.addEventListener("click", () => {
            const pars = Array.from(document.querySelectorAll("p"));
            typeEl.value = pars[0].textContent.split(" ")[1];
            intensityEl.value = pars[1].textContent.split(" ")[1];
            durationEl.value = pars[2].textContent.split(" ")[1];
            dateEl.value = pars[3].textContent.split(" ")[1];
            caloriesEl.value = pars[4].textContent.split(" ")[1];
            document.querySelector("li").remove();
            document.querySelector("#add-activity").disabled = false;
        });

        nextButtonEl.addEventListener("click", () => {
            document.querySelector("li").remove();
            const tableEl = document.querySelector("#activities-table");
            const tr = document.createElement("tr");
            tableEl.appendChild(tr);
            const typeTd = document.createElement("td");
            typeTd.textContent = type;
            typeTd.className = "type-cell";
            tr.appendChild(typeTd);
            const durationTd = document.createElement("td");
            durationTd.textContent = duration;
            durationTd.className = "duration-cell";
            tr.appendChild(durationTd);
            const caloriesTd = document.createElement("td");
            caloriesTd.textContent = calories;
            caloriesTd.className = "calories-cell";
            tr.appendChild(caloriesTd);
            const dateTd = document.createElement("td");
            dateTd.textContent = date;
            dateTd.className = "date-cell";
            tr.appendChild(dateTd);
            const intensityTd = document.createElement("td");
            intensityTd.textContent = intensity;
            intensityTd.className = "intensity-cell";
            tr.appendChild(intensityTd);
            const btnTd = document.createElement("td");
            btnTd.className = "btn-cell";
            tr.appendChild(btnTd);
            const delBtn = document.createElement("button");
            delBtn.className = "delete-btn";
            delBtn.textContent = "Delete";
            btnTd.appendChild(delBtn);
            delBtn.addEventListener("click", () => {
                tr.remove();
            });
            addActivityButtonEl.disabled = false;
        });
    });
}
