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

// Função para manipular o carrossel
function showSlider(type) {
    const items = document.querySelectorAll('.carousel .list .item');
  

    if (type === 'next') {
        // Move o primeiro item para o final da lista
        ListItemDom.appendChild(items[0]);


    } else if (type === 'prev') {
        // Move o último item para o início da lista
        ListItemDom.insertBefore(items[items.length - 1], items[0]);
    }
}

// Adicionar eventos de clique para os botões de navegação do carrossel
nextDom.addEventListener('click', () => showSlider('next'));
prevDom.addEventListener('click', () => showSlider('prev'));
