// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// About Me Category Toggle
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.detail-section').forEach(section => {
            section.style.display = 'none';
        });

        const target = this.getAttribute('data-target');
        document.getElementById(target).style.display = 'block';
    });
});

// Hero Image Glowing Effect
const heroImage = document.querySelector('.hero-image');
const glowEffect = document.querySelector('.glow-effect');

document.addEventListener('mousemove', (event) => {
    const { clientX: x, clientY: y } = event;
    const { offsetWidth: width, offsetHeight: height } = heroImage;

    const xOffset = (x / window.innerWidth - 0.5) * 20;
    const yOffset = (y / window.innerHeight - 0.5) * 20;

    glowEffect.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
});
function toggleMenu() {
    const navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('show');
}

//jjjjj

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });


    document.addEventListener("DOMContentLoaded", function () {
        const hireMeBtn = document.querySelector(".hire-me-btn");
        
        hireMeBtn.addEventListener("click", function () {
            // Add the clicked class to show green background and thanks message
            hireMeBtn.classList.add("clicked");
    
            // Remove the class after 1.5 seconds to reset the button
            setTimeout(() => {
                hireMeBtn.classList.remove("clicked");
            }, 1500);
        });
    });
    
