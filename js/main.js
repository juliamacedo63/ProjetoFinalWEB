let searchContainer = document.createElement("div");
searchContainer.style.display = "flex";
searchContainer.style.alignItems = "center";
searchContainer.style.gap = "10px";

let searchBox = document.querySelector("#search-box");
searchBox.style.flex = "1";

let searchButton = document.createElement("button");
searchButton.textContent = "Buscar";
searchButton.style.padding = "5px 10px";
searchButton.style.cursor = "pointer";

searchBox.parentNode.insertBefore(searchContainer, searchBox);
searchContainer.appendChild(searchBox);
searchContainer.appendChild(searchButton);

let warningMessage = document.createElement("div");
warningMessage.style.color = "red";
warningMessage.style.fontSize = "20px";
warningMessage.style.fontWeight = "bold";
warningMessage.style.marginTop = "10px";
searchContainer.parentNode.insertBefore(warningMessage, searchContainer.nextSibling);

let images = document.querySelectorAll(".container .container-image .image");

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
        let title = image.getAttribute("data-title")?.toLowerCase() || "";

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
