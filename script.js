// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(id) {
    // Lógica para adicionar o item ao carrinho
}

// Função para finalizar a compra
function finalizarCompra() {
    // Lógica para finalizar a compra
}

var overlay = document.getElementById("overlay");

function abrirImagem(src) {
    fecharImagem(); // Fecha a imagem atual, se estiver aberta

    var imagemAmpliada = document.createElement("img");
    imagemAmpliada.src = src;

    overlay.appendChild(imagemAmpliada);
    overlay.style.display = "block";

    overlay.addEventListener("click", function() {
        fecharImagem();
    });
}

function fecharImagem() {
    overlay.style.display = "none";

    // Remove a imagem ampliada do overlay
    while (overlay.firstChild) {
        overlay.removeChild(overlay.firstChild);
    }
}


