var add = document.getElementById("Plus");
var input = document.getElementById("text");
var inputFields = document.getElementById("InputFilds");
add.addEventListener("click", function () {
    if (input.value.trim()) {
        var child_1 = document.createElement("div");
        child_1.classList.add("child");
        child_1.innerHTML = "\n            <div>\n                <span class=\"text-content\">".concat(input.value, "</span>\n                <input type=\"text\" class=\"edit-input\" style=\"display: none;\" />\n            </div>\n            <div>\n                <img class=\"delete-btn\" src=\"svgexport-15 (10).svg\" alt=\"Delete\"/>\n                <img class=\"edit-btn\" src=\"Edit.svg\" alt=\"Edit\"/>\n                <button class=\"save-btn\" style=\"display: none;\">Save</button>\n            </div>\n        ");
        if (inputFields) {
            inputFields.appendChild(child_1);
        }
        input.value = "";
        var deleteButton = child_1.querySelector(".delete-btn");
        var editButton = child_1.querySelector(".edit-btn");
        var saveButton_1 = child_1.querySelector(".save-btn");
        var textSpan_1 = child_1.querySelector(".text-content");
        var editInput_1 = child_1.querySelector(".edit-input");
        deleteButton.addEventListener("click", function () {
            child_1.remove();
            console.log("Deleted!");
        });
        editButton.addEventListener("click", function () {
            editInput_1.value = textSpan_1.innerText;
            textSpan_1.style.display = "none";
            editInput_1.style.display = "inline-block";
            saveButton_1.style.display = "inline-block";
            editInput_1.focus();
        });
        saveButton_1.addEventListener("click", function () {
            textSpan_1.innerText = editInput_1.value;
            textSpan_1.style.display = "inline";
            editInput_1.style.display = "none";
            saveButton_1.style.display = "none";
        });
    }
});
