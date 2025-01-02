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
