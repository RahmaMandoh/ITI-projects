var add = document.getElementById("Plus");
var input = document.getElementById("text") as HTMLInputElement;
var inputFields = document.getElementById("InputFilds"); // فكرتك كانت هنا أنك تضيفي المحتوى في هذا العنصر

add.addEventListener("click", function(e) {
    if (input.value) {
        let htmlContent: string = `
        <div class="child">
            <div>
                <span class="">${input.value}</span>
            </div>

            <div>
                <img id="Delete" src="svgexport-15 (10).svg"/>
                <img id="Edit" src="Edit.svg"/>
            </div>
        </div>`;
        
        if (inputFields) {
            inputFields.innerHTML += htmlContent; 
            input.value = "";

            var deleteButtons = document.querySelectorAll("#Delete");
            deleteButtons.forEach(button => {
                button.addEventListener("click", function() {
                button.closest(".child")?.remove();
                });
            });
            var editButton = document.querySelectorAll("#Edit");
            editButton.forEach(button =>{
                button.addEventListener("click", function(){
                    button.addEventListener("click", function() {
                        
                    });
                });
            });
        }
    }
});
