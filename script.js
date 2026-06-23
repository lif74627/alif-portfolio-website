/* =============================================
   TYPING EFFECT (index.html)
============================================= */

const roles = [
    "Web Developer",
    "Digital Creative"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing-text");

function typeEffect() {

    if (charIndex < roles[roleIndex].length) {

        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);

    } else {

        setTimeout(deleteEffect, 1500);

    }

}

function deleteEffect() {

    if (charIndex > 0) {

        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteEffect, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeEffect, 300);

    }

}

if (typingElement) {
    typeEffect();
}

/* =============================================
   SKILLS SCROLL (index.html)
============================================= */

const prevBtn = document.getElementById("prevBtn");

if (prevBtn) {

    prevBtn.addEventListener("click", () => {

        currentSkill--;

        if (currentSkill < 0) {
            currentSkill = skills.length - 1;
        }

        updateSkill();

    });

}

/* =============================================
   MOBILE NAVBAR
============================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

}

/* =============================================
   IMAGE LIGHTBOX (projects.html)
============================================= */

const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

if (lightbox && lightboxImg && closeLightbox) {

    galleryImages.forEach(image => {

        image.addEventListener('click', () => {

            // Abaikan thumbnail video (img yang ada di dalam .gallery-item)
            if (image.closest('.gallery-item')) return;

            lightbox.style.display = 'flex';
            lightboxImg.src = image.src;

        });

    });

    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {

        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }

    });

    // Tutup lightbox dengan tombol Escape
    document.addEventListener('keydown', (e) => {

        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
            closeVideo();
        }

    });

}

/* =============================================
   VIDEO LIGHTBOX (projects.html)
============================================= */

function openVideo(videoSrc) {

    const videoLightbox = document.getElementById("videoLightbox");
    const video = document.getElementById("lightboxVideo");

    video.src = videoSrc;
    videoLightbox.style.display = "flex";
    video.play();

}

function closeVideo() {

    const videoLightbox = document.getElementById("videoLightbox");
    const video = document.getElementById("lightboxVideo");

    if (!videoLightbox || !video) return;

    video.pause();
    video.currentTime = 0;
    videoLightbox.style.display = "none";

}

// Klik di luar video untuk menutup
const videoLightbox = document.getElementById("videoLightbox");

if (videoLightbox) {

    videoLightbox.addEventListener('click', (e) => {

        if (e.target === videoLightbox) {
            closeVideo();
        }

    });

}

/* =========================
   SCROLL TO TOP BUTTON
========================= */

const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {

    window.addEventListener('scroll', () => {

        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }

    });

    scrollTopBtn.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

}