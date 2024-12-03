// 1. Scroll suave para links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Desloca suavemente para a seção correspondente
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Mostrar o botão de "Voltar ao Topo" quando o usuário rolar a página
window.onscroll = function () {
    const topButton = document.querySelector('.top-page');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

// 3. Função para voltar ao topo
document.querySelector('.top-page').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 4. Validação de formulário (nome, email e mensagem)
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    let valid = true;

    // Validação do nome
    if (!nome) {
        showError('nome', "Por favor, insira seu nome.");
        valid = false;
    } else {
        clearError('nome');
    }

    // Validação do e-mail
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
        showError('email', "Por favor, insira um e-mail válido.");
        valid = false;
    } else {
        clearError('email');
    }

    // Validação da mensagem
    if (!mensagem) {
        showError('mensagem', "Por favor, insira uma mensagem.");
        valid = false;
    } else {
        clearError('mensagem');
    }

    // Se todos os campos forem válidos, envia o formulário
    if (valid) {
        alert("Mensagem enviada com sucesso!");
        form.reset(); // Limpa os campos após o envio
    }
});

// Função para mostrar o erro de validação
function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const parent = input.parentElement;
    const errorMessage = document.createElement('span');
    errorMessage.classList.add('error');
    errorMessage.textContent = message;
    parent.appendChild(errorMessage);
    input.classList.add('input-error');
}

// Função para limpar o erro
function clearError(inputId) {
    const input = document.getElementById(inputId);
    const parent = input.parentElement;
    const error = parent.querySelector('.error');
    if (error) {
        parent.removeChild(error);
    }
    input.classList.remove('input-error');
}

// 5. Animações de entrada quando o usuário rola a página
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom >= 0) {
            element.classList.add('fade-in');
        } else {
            element.classList.remove('fade-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Inicializa animações quando a página carrega

// 6. Contador de caracteres para a mensagem
const maxMessageLength = 500;
const messageField = document.getElementById('mensagem');
const charCounter = document.createElement('div');
charCounter.id = 'charCounter';
messageField.parentElement.appendChild(charCounter);

messageField.addEventListener('input', function () {
    const currentLength = messageField.value.length;
    charCounter.textContent = `${currentLength} / ${maxMessageLength} caracteres`;
    if (currentLength > maxMessageLength) {
        charCounter.style.color = 'red';
    } else {
        charCounter.style.color = '#fff';
    }
});

// 7. Alternar entre tema claro e escuro
const toggleThemeButton = document.createElement('button');
toggleThemeButton.textContent = 'Alterar Tema';
toggleThemeButton.id = 'toggleTheme';
document.body.appendChild(toggleThemeButton);

toggleThemeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
});

// Função para carregar imagens de maneira assíncrona
const loadGalleryImages = () => {
    const galleryImages = document.querySelectorAll('.galeria img');
    galleryImages.forEach(img => {
        img.addEventListener('load', function () {
            this.style.opacity = 1;
        });
        img.style.opacity = 0;
        img.src = img.dataset.src; // Usar o atributo data-src para carregar a imagem
    });
};

// Carregar imagens ao dar load na página
window.addEventListener('load', loadGalleryImages);
