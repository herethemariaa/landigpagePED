// Animação suave ao clicar nos links do menu
document.querySelectorAll('#nav-list a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        // encontra o elemento correspondente na página pelo ID
        let targetId = this.getAttribute('href')
        let targetElement = document.querySelector(targetId)

        // rola suavemente até o destino
        targetElement.scrollIntoView({
            behavior: 'smooth'
        })

        controleMenu(this)
    })
})

// Função para adicionar a classe 'active' ao link clicado
function controleMenu(link) {
    // Remove a classe 'active' de todos os links
    document.querySelectorAll('#nav-list a').forEach(item => {
        item.classList.remove('active')
    });

    // Adiciona a classe 'active' ao link clicado
    link.classList.add('active')

    // Fecha o menu de navegação em telas pequenas
    if (window.innerWidth <= 768) {
        navList.classList.remove('active')
        mobileMenuButton.classList.remove('active')
    }
}

// Seleciona o botão do menu, a lista de navegação e todos os links do menu
let mobileMenuButton = document.getElementById("mobile-menu")
let navList = document.getElementById("nav-list")
let navLinks = document.querySelectorAll('.nav-item a') 

// Alterna o estado do menu em telas pequenas
mobileMenuButton.addEventListener("click", () => {
    mobileMenuButton.classList.toggle("active") 
    navList.classList.toggle("active") 
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove("active") // Esconde o menu
        mobileMenuButton.classList.remove("active") // Restaura o ícone do hambúrguer
    })
})

// Carrossel: Função para exibir a imagem atual
let currentIndex = 0; // Índice da imagem ativa
const carousel = document.getElementById('carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

// Função para exibir a imagem no índice atual
function showSlide(index) {
    // Impede o índice de ultrapassar o limite das imagens
    if (index < 0) {
        currentIndex = totalItems - 1; // Vai para a última imagem
    } else if (index >= totalItems) {
        currentIndex = 0; // Volta para a primeira imagem
    } else {
        currentIndex = index;
    }

    // Atualiza a posição do carrossel
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators(); // Atualiza os indicadores (pontos)
}

// Função para avançar para a próxima imagem
function nextSlide() {
    showSlide(currentIndex + 1); // Avança para a próxima imagem
}

// Função para retroceder para a imagem anterior
function prevSlide() {
    showSlide(currentIndex - 1); // Volta para a imagem anterior
}

// Função para atualizar os indicadores (pontos de navegação)
function updateIndicators() {
    const dots = document.querySelectorAll('#carousel-indicators .dot');
    dots.forEach(dot => dot.classList.remove('active')); // Remove a classe 'active' de todos os pontos
    dots[currentIndex].classList.add('active'); // Adiciona a classe 'active' no ponto correspondente
}

// Criação dos pontos de navegação
const indicators = document.createElement('div');
indicators.id = 'carousel-indicators';
for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex); // Exibe a imagem correspondente ao ponto
    });
    indicators.appendChild(dot);
}
document.getElementById('carousel-container').appendChild(indicators);

// Inicializa o carrossel
showSlide(currentIndex);

// Configura o carrossel para mudar automaticamente a cada 5 segundos
setInterval(() => {
    nextSlide();
}, 5000);

// Scroll Reveal: Funciona para mostrar os elementos à medida que rola a página
function scrollReveal() {
    const elements = document.querySelectorAll('.info-item, .box-diferenciais ul li, .matricula-item, #titulo');

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            el.classList.add('visible'); // Torna o elemento visível quando estiver no alcance
        }
    });
}

// Botão de voltar ao topo
const backToTopButton = document.getElementById('backToTop');

// Exibe ou oculta o botão de voltar ao topo dependendo da rolagem
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.style.display = 'block'; 
    } else {
        backToTopButton.style.display = 'none'; 
    }

    scrollReveal(); // Verifica os elementos visíveis durante o scroll
});

// Voltar ao topo ao clicar no botão
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Exibe ou oculta a lista de infraestrutura com um botão de alternância
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const listContainer = document.querySelector('.list-container');

    toggleButton.addEventListener('click', () => {
        listContainer.classList.toggle('visible');

        // Altera o texto do botão conforme a visibilidade da lista
        toggleButton.textContent = listContainer.classList.contains('visible') ? "↑" : "↓";
    });
});
