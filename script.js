const toggleBtns = document.querySelectorAll('.toggle_btn');
const dropdowns = document.querySelectorAll('.dropdown');

// Adicionar evento de clique para cada botão toggle
toggleBtns.forEach((toggleBtn, index) => {
    const dropdown = dropdowns[index];
    const toggleBtnIcon = toggleBtn.querySelector('i');

    toggleBtn.onclick = function () {
        dropdown.classList.toggle('open');
        const isOpen = dropdown.classList.contains('open');

        // Atualizar o ícone do botão
        toggleBtnIcon.className = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';
    };
});
const nextDom = document.getElementById('next');
const prevDom = document.getElementById('prev');
const carouselDom = document.querySelector('.carousel');
const ListItemDom = document.querySelector('.carousel .list');
const thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function () {
    showSlider('next');
};

function showSlider(type) {
    const itemSlider = document.querySelectorAll('.carousel .list .item');
    const thumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') { // Corrigido: removido o espaço extra
        ListItemDom.appendChild(itemSlider[0]); // Move o primeiro item para o final
    } else if (type === 'prev') { // Implementação para o botão 'prev'
        ListItemDom.insertBefore(itemSlider[itemSlider.length - 1], itemSlider[0]); // Move o último item para o início
    }
}

prevDom.onclick = function () {
    showSlider('prev'); // Adicionada funcionalidade para o botão 'prev'
};
