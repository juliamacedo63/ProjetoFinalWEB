let searchBox = document.querySelector("#search-box");
let images = document.querySelectorAll(".container .container-image .image");
let warningMessage = document.createElement("div");  

warningMessage.style.color = "red";  
warningMessage.style.fontSize = "20px";  
warningMessage.style.fontWeight = "bold";  
warningMessage.style.marginTop = "10px";  

searchBox.parentNode.insertBefore(warningMessage, searchBox);

let searchButton = document.createElement("button");
searchButton.textContent = "Buscar";
searchButton.style.marginLeft = "10px";
searchButton.style.padding = "5px 10px";
searchBox.parentNode.insertBefore(searchButton, searchBox.nextSibling);

searchBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        filterImages();
    }
});
searchButton.addEventListener("click", filterImages);

function filterImages() {
    let value = searchBox.value.toLowerCase().trim(); 
    let found = false;

    warningMessage.textContent = '';

    if (value.length < 2) {
        warningMessage.textContent = "Digite pelo menos 2 caracteres para a busca";  
        return; 
    }

    images.forEach(image => {
        let title = image.getAttribute("data-title").toLowerCase(); 
        
        if (title.includes(value)) {
            image.style.display = "block";
            found = true;
        } else {
            image.style.display = "none";  
        }
    });

    if (!found) {
        warningMessage.textContent = "Resultado não encontrado";  
    }
}
