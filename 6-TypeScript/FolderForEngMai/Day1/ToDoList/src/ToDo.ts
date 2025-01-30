var add = document.getElementById("Plus") as HTMLButtonElement;
var input = document.getElementById("text") as HTMLInputElement;
var inputFields = document.getElementById("InputFilds");

add.addEventListener("click", function () {
    if (input.value.trim()) {
        let child = document.createElement("div");
        child.classList.add("child");

        child.innerHTML = `
            <div>
                <span class="text-content">${input.value}</span>
                <input type="text" class="edit-input" style="display: none;" />
            </div>
            <div>
                <img class="delete-btn" src="svgexport-15 (10).svg" alt="Delete"/>
                <img class="edit-btn" src="Edit.svg" alt="Edit"/>
                <button class="save-btn" style="display: none;">Save</button>
            </div>
        `;

        if (inputFields) {
            inputFields.appendChild(child);
        }

        input.value = "";

        let deleteButton = child.querySelector(".delete-btn") as HTMLImageElement;
        let editButton = child.querySelector(".edit-btn") as HTMLImageElement;
        let saveButton = child.querySelector(".save-btn") as HTMLButtonElement;
        let textSpan = child.querySelector(".text-content") as HTMLSpanElement;
        let editInput = child.querySelector(".edit-input") as HTMLInputElement;

        deleteButton.addEventListener("click", function () {
            child.remove();
            console.log("Deleted!");
        });

        editButton.addEventListener("click", function () {
            editInput.value = textSpan.innerText; 
            textSpan.style.display = "none"; 
            editInput.style.display = "inline-block"; 
            saveButton.style.display = "inline-block"; 
            editInput.focus();
        });

        saveButton.addEventListener("click", function () {
            textSpan.innerText = editInput.value; 
            textSpan.style.display = "inline"; 
            editInput.style.display = "none"; 
            saveButton.style.display = "none"; 
        });
    }
});
