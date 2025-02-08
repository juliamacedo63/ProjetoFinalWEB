let searchBox = document.querySelector("#search-box");
let images = document.querySelectorAll(".container .container-image .image");
let warningMessage = document.createElement("div"); 

// Personalizando o estilo da mensagem de aviso
warningMessage.style.color = "red";  
warningMessage.style.fontSize = "20px";  
warningMessage.style.fontWeight = "bold";  
warningMessage.style.marginTop = "10px";  

// Adicionando a mensagem ao DOM, logo acima da caixa de pesquisa
searchBox.parentNode.insertBefore(warningMessage, searchBox);

searchBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        filterImages();
    }
});

function filterImages() {
    let value = searchBox.value.toLowerCase().trim(); 
    let found = false;

    // Limpa a mensagem de aviso
    warningMessage.textContent = '';

    if (value.length < 2) {
        warningMessage.textContent = "Digite pelo menos 2 caracteres para a busca";  
        searchBox.value = ''; 
        return; 
    }

    images.forEach(image => {
        let title = image.getAttribute("data-title").toLowerCase(); 
        
        if (title.includes(value)) {
            image.style.display = "block";
            found = true;
        } else {
            image.style.display = "block"; 
        }
    });

    if (!found) {
        warningMessage.textContent = "Resultado não encontrado";  
    }
}
