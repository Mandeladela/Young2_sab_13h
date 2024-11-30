document.addEventListener("DOMContentLoaded", () => {
    // Selecionar todas as imagens na galeria
    const imagensGaleria = document.querySelectorAll(".galeria img");

    // Adicionar efeito de zoom ao passar o mouse
    imagensGaleria.forEach((img) => {
        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.2)"; // Aproxima a imagem
            img.style.transition = "transform 0.3s ease"; // Suaviza o efeito
        });

        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)"; // Volta ao tamanho original
        });

        // Adicionar evento de clique para mostrar informações
        img.addEventListener("click", () => {
            mostrarInformacoes(img);
        });
    });

    // Função para mostrar informações da imagem clicada
    function mostrarInformacoes(img) {
        // Dados fictícios para simular informações de cada imagem
        const informacoesCamisas = {
            "Foto 1": { tamanho: "M", material: "Algodão", descricao: "Camiseta preta estilo hype." },
            "Foto 2": { tamanho: "G", material: "Poliéster", descricao: "Camiseta branca com estampa moderna." },
            "Foto 3": { tamanho: "P", material: "Viscose", descricao: "Camiseta casual com design minimalista." },
            "Foto 4": { tamanho: "GG", material: "Algodão Premium", descricao: "Camiseta streetwear de alta qualidade." },
            "Foto 5": { tamanho: "M", material: "Linho", descricao: "Camiseta estilosa e confortável." },
            "Foto 6": { tamanho: "G", material: "Poliéster", descricao: "Camiseta com estampa de dinossauro." }
        };

        const altText = img.alt; // Identificar a imagem pelo atributo alt
        const info = informacoesCamisas[altText];

        // Criar ou exibir a seção de informações
        let infoSection = document.querySelector(".info-section");
        if (!infoSection) {
            infoSection = document.createElement("div");
            infoSection.classList.add("info-section");
            document.body.appendChild(infoSection);
        }

        // Preencher a seção com as informações
        infoSection.innerHTML = `
            <h3>Informações da Camiseta</h3>
            <p><strong>Tamanho:</strong> ${info.tamanho}</p>
            <p><strong>Material:</strong> ${info.material}</p>
            <p><strong>Descrição:</strong> ${info.descricao}</p>
            <button class="close-info">Fechar</button>
        `;

        // Exibir a seção de informações
        infoSection.style.display = "block";

        // Adicionar evento para fechar a seção
        const closeButton = infoSection.querySelector(".close-info");
        closeButton.addEventListener("click", () => {
            infoSection.style.display = "none";
        });

        // Estilizar a seção (opcional)
        infoSection.style.position = "fixed";
        infoSection.style.top = "50%";
        infoSection.style.left = "50%";
        infoSection.style.transform = "translate(-50%, -50%)";
        infoSection.style.backgroundColor = "white";
        infoSection.style.border = "1px solid #ccc";
        infoSection.style.padding = "20px";
        infoSection.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        infoSection.style.zIndex = "1000";
    }
});
