const toggleBtns = document.querySelectorAll('.toggle_btn');
const dropdowns = document.querySelectorAll('.dropdown');

// Adicionar evento de clique para cada botão toggle
toggleBtns.forEach((toggleBtn, index) => {
    const dropdown = dropdowns[index];
    const toggleBtnIcon = toggleBtn.querySelector('i');

    toggleBtn.addEventListener('click', () => {
        dropdown.classList.toggle('open');
        const isOpen = dropdown.classList.contains('open');

        // Atualizar o ícone do botão
        toggleBtnIcon.className = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';
    });
});

// Seleção de elementos do carrossel
const nextDom = document.getElementById('next');
const prevDom = document.getElementById('prev');
const ListItemDom = document.querySelector('.carousel .list');
const thumbnailDom = document.querySelector('.carousel .thumbnail');

// Função para manipular o carrossel
function showSlider(type) {
    const items = document.querySelectorAll('.carousel .list .item');
    const itemsThumbnails = document.querySelectorAll('.carousel .thumbnail .item');
  
    if (type === 'next') {
        // Move o primeiro item para o final da lista
        ListItemDom.appendChild(items[0]);
        thumbnailDom.appendChild(itemsThumbnails[0]); 
    } else if (type === 'prev') {
        // Move o último item para o início da lista
        ListItemDom.insertBefore(items[items.length - 1], items[0]);
        thumbnailDom.insertBefore(itemsThumbnails[itemsThumbnails.length - 1], itemsThumbnails[0]); // Movendo a thumbnail
    }
}

nextDom.addEventListener('click', () => showSlider('next'));
prevDom.addEventListener('click', () => showSlider('prev'));


// Seleciona todos os botões "Add Movie"
const addMovieBtns = document.querySelectorAll(".addMovieBtn");
const overlay = document.getElementById("overlay");
const locationPopup = document.getElementById("locationPopup"); 
const closePopupBtn = document.getElementById("closePopupBtn"); 

// Função para abrir o pop-up
function openPopup() {
    locationPopup.classList.add("active");
    overlay.classList.add("active");
}

// Função para fechar o pop-up
function closePopup() {
    locationPopup.classList.remove("active");
    overlay.classList.remove("active");
}

// Adiciona evento de clique para todos os botões "Add Movie"
addMovieBtns.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault(); // Impede o redirecionamento
        openPopup();
    });
});

// Evento para fechar pop-up ao clicar no botão de fechar
closePopupBtn.addEventListener("click", closePopup);

// Evento para fechar pop-up ao clicar no overlay
overlay.addEventListener("click", closePopup);

