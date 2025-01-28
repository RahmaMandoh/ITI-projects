var add = document.getElementById("Plus");
var input = document.getElementById("text");
var inputFields = document.getElementById("InputFilds"); // فكرتك كانت هنا أنك تضيفي المحتوى في هذا العنصر
add.addEventListener("click", function (e) {
    if (input.value) {
        var htmlContent = "\n        <div class=\"child\">\n            <div>\n                <span class=\"\">".concat(input.value, "</span>\n            </div>\n\n            <div>\n                <img id=\"Delete\" src=\"svgexport-15 (10).svg\"/>\n                <img id=\"Edit\" src=\"Edit.svg\"/>\n            </div>\n        </div>");
        if (inputFields) {
            inputFields.innerHTML += htmlContent;
            input.value = "";
            var deleteButtons = document.querySelectorAll("#Delete");
            deleteButtons.forEach(function (button) {
                button.addEventListener("click", function () {
                    var _a;
                    (_a = button.closest(".child")) === null || _a === void 0 ? void 0 : _a.remove();
                });
            });
            var editButton = document.querySelectorAll("#Edit");
            editButton.forEach(function (button) {
                button.addEventListener("click", function () {
                    button.addEventListener("click", function () {
                    });
                });
            });
        }
    }
});
