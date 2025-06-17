// Dados das Obras (simulando um banco de dados)
const obras = [
    { id: 1, titulo: "Obra 1", categoria: "pinturas", imagem: "imagens/obra1.jpg", miniatura: "imagens/thumb_obra1.jpg" },
    { id: 2, titulo: "Obra 2", categoria: "esculturas", imagem: "imagens/obra2.jpg", miniatura: "imagens/thumb_obra2.jpg" },
    { id: 3, titulo: "Obra 3", categoria: "fotografias", imagem: "imagens/obra3.jpg", miniatura: "imagens/thumb_obra3.jpg" },
    // Adicione mais obras conforme necessário
];

// Carrega a galeria
function carregarGaleria(categoria = "todos") {
    const gridObras = document.querySelector('.grid-obras');
    gridObras.innerHTML = '';

    const obrasFiltradas = categoria === "todos" 
        ? obras 
        : obras.filter(obra => obra.categoria === categoria);

    obrasFiltradas.forEach(obra => {
        gridObras.innerHTML += `
            <a href="${obra.imagem}" data-lightbox="galeria" data-title="${obra.titulo}">
                <img src="${obra.miniatura}" alt="${obra.titulo}">
            </a>
        `;
    });
}

// Filtros
document.querySelectorAll('.filtros button').forEach(botao => {
    botao.addEventListener('click', () => {
        document.querySelector('.filtros button.ativo').classList.remove('ativo');
        botao.classList.add('ativo');
        carregarGaleria(botao.dataset.categoria);
    });
});

// Inicializa a galeria
document.addEventListener('DOMContentLoaded', () => {
    carregarGaleria();
});