// ===== NAVEGACIÓN MÓVIL =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// ===== NAVEGACIÓN SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== EFECTO DE NAVEGACIÓN AL HACER SCROLL =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(13, 13, 13, 0.98)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(13, 13, 13, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// ===== MODAL DE GALERÍA =====
function openModal(imageId) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    // Mapeo de IDs a rutas de imágenes
    const imageMap = {
        'img1': 'images/astillero-gallery-1.jpg',
        'img2': 'images/astillero-gallery-2.jpg',
        'img3': 'images/astillero-gallery-3.jpg',
        'img4': 'images/astillero-gallery-4.jpg',
        'img5': 'images/raptor-gallery-1.jpg',
        'img6': 'images/raptor-gallery-2.jpg',
        'img7': 'images/raptor-gallery-3.jpg',
        'img8': 'images/raptor-gallery-4.jpg'
    };
    
    // Caption basado en el ID de la imagen
    const captions = {
        'img1': 'Astillero Sailors - Cardumen 520 Open',
        'img2': 'Astillero Sailors - Cardumen 520 Consola Central',
        'img3': 'Astillero Sailors - Cardumen 520 Consola Lateral',
        'img4': 'Astillero Sailors - Drift Boat Sailors',
        'img5': 'Raptor Overland - Diseño',
        'img6': 'Raptor Overland - Estilo',
        'img7': 'Raptor Overland - Innovacion',
        'img8': 'Raptor Overland - Aventuras Extremas'
    };
    
    // Configurar la imagen del modal
    modalImg.src = imageMap[imageId] || 'images/astillero-gallery-1.jpg';
    modalImg.style.display = 'block';
    modalCaption.textContent = captions[imageId] || 'Imagen de la galería';
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Agregar entrada al historial para el botón atrás
    history.pushState({modal: true, imageId: imageId}, '', '#galeria');
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Volver al estado anterior en el historial
    history.back();
}

// Cerrar modal al hacer clic fuera de la imagen
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Manejar el botón atrás del navegador
window.addEventListener('popstate', function(e) {
    const modal = document.getElementById('imageModal');
    if (modal.style.display === 'block') {
        closeModal();
    }
});

// ===== FORMULARIO DE CONTACTO =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener datos del formulario
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');
    
    // Validación básica
    if (!name || !email || !service || !message) {
        showNotification('Por favor, completa todos los campos', 'error');
        return;
    }
    
    // Simular envío del formulario
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// ===== SISTEMA DE NOTIFICACIONES =====
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos de la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `;
    
    // Colores según el tipo
    if (type === 'success') {
        notification.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(45deg, #f44336, #d32f2f)';
    } else {
        notification.style.background = 'linear-gradient(45deg, #2196F3, #1976D2)';
    }
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// ===== ANIMACIONES AL HACER SCROLL =====
function animateOnScroll() {
    const elements = document.querySelectorAll('.gallery-item, .brand-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in-up');
        }
    });
}

// Ejecutar animaciones al cargar y al hacer scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// ===== ACTUALIZAR AÑO EN FOOTER =====
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ===== EFECTO DE PARALLAX SUAVE EN HERO =====
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});


// ===== EFECTO DE HOVER EN ELEMENTOS DE GALERÍA =====
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== CARGAR IMÁGENES DINÁMICAMENTE (OPCIONAL) =====
// Esta función se puede usar para cargar imágenes reales de Instagram
function loadInstagramImages() {
    // Ejemplo de cómo cargar imágenes de Instagram
    // Reemplazar los placeholders con URLs reales de Instagram
    
    const imageUrls = {
        'astillero1': 'https://example.com/astillero1.jpg',
        'astillero2': 'https://example.com/astillero2.jpg',
        'raptor1': 'https://example.com/raptor1.jpg',
        'raptor2': 'https://example.com/raptor2.jpg'
    };
    
    // Aplicar las URLs a los elementos correspondientes
    // document.querySelectorAll('.gallery-placeholder').forEach((placeholder, index) => {
    //     const imageUrl = Object.values(imageUrls)[index];
    //     if (imageUrl) {
    //         placeholder.style.backgroundImage = `url(${imageUrl})`;
    //         placeholder.style.backgroundSize = 'cover';
    //         placeholder.style.backgroundPosition = 'center';
    //     }
    // });
}

// ===== BOTÓN DE WHATSAPP =====
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    
    // Mensajes predefinidos para diferentes secciones
    const whatsappMessages = {
        'astillero': 'Hola! Me interesa conocer más sobre los servicios de Astillero Sailors (construcción de veleros, mantenimiento náutico, charters).',
        'raptor': 'Hola! Me interesa conocer más sobre las aventuras de Raptor Overland Arg (travesías 4x4, equipamiento outdoor, rutas).',
        'general': 'Hola! Me interesa conocer más sobre sus servicios.'
    };
    
    // Actualizar mensaje según la sección visible
    function updateWhatsAppMessage() {
        const sections = document.querySelectorAll('section[id]');
        let currentSection = 'general';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                if (section.id === 'quienes-somos') {
                    // Detectar si está viendo la sección de Astillero o Raptor
                    const brandContents = section.querySelectorAll('.brand-content');
                    brandContents.forEach(content => {
                        const rect = content.getBoundingClientRect();
                        if (rect.top <= 200 && rect.bottom >= 200) {
                            if (content.querySelector('.astillero')) {
                                currentSection = 'astillero';
                            } else if (content.querySelector('.raptor')) {
                                currentSection = 'raptor';
                            }
                        }
                    });
                } else if (section.id === 'galeria') {
                    // Detectar si está viendo galería de Astillero o Raptor
                    const gallerySections = section.querySelectorAll('.gallery-section');
                    gallerySections.forEach(gallerySection => {
                        const rect = gallerySection.getBoundingClientRect();
                        if (rect.top <= 200 && rect.bottom >= 200) {
                            if (gallerySection.querySelector('.astillero')) {
                                currentSection = 'astillero';
                            } else if (gallerySection.querySelector('.raptor')) {
                                currentSection = 'raptor';
                            }
                        }
                    });
                }
            }
        });
        
        // Actualizar el enlace de WhatsApp
        const message = encodeURIComponent(whatsappMessages[currentSection]);
        whatsappBtn.href = `https://wa.me/5493401642039?text=${message}`;
    }
    
    // Actualizar mensaje al hacer scroll
    window.addEventListener('scroll', updateWhatsAppMessage);
    
    // Actualizar mensaje al cargar la página
    updateWhatsAppMessage();
    
    // Efecto de click en el botón
    whatsappBtn.addEventListener('click', function() {
        // Agregar efecto visual de click
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Analytics o tracking (opcional)
        console.log('WhatsApp button clicked');
    });
    
    // Mostrar/ocultar botón según scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            // Scrolling down - ocultar botón
            whatsappBtn.style.transform = 'translateY(100px)';
        } else {
            // Scrolling up - mostrar botón
            whatsappBtn.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
});

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    console.log('Astillero Sailors & Raptor Overland Arg - Website loaded successfully!');
    
    // Cargar imágenes de Instagram si están disponibles
    // loadInstagramImages();
});
