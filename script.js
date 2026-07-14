// ==========================
// Menu Toggle
// ==========================

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// ==========================
// Active Navbar on Scroll
// ==========================

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        let activeLink = document.querySelector(
          'header nav a[href="#' + id + '"]',
        );

        if (activeLink) {
          navLinks.forEach((link) => link.classList.remove("active"));
          activeLink.classList.add("active");
        }
      });
    }
  });

  // Sticky Header

  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // Close Menu After Scroll

  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ==========================
// Console Message
// ==========================

console.log("Prasanth Portfolio Loaded Successfully");

// ===== Typing Name Animation =====

const nameText = "Bala Veera Prasanth Donthamsetti";
const typingName = document.getElementById("typing-name");

let charIndex = 0;

function typeWriter() {
  if (charIndex < nameText.length) {
    typingName.textContent += nameText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener("load", typeWriter);
const spotlight = document.getElementById("spotlight");

document.addEventListener("mousemove", (e) => {
  spotlight.style.left = e.clientX + "px";
  spotlight.style.top = e.clientY + "px";
});
function openImage(image) {
  window.open(image, "_blank");
}
const projectImages = [
  "lucky copy.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg",
  "images/photo7.jpg",
  "images/photo8.jpg",
  "images/photo9.jpg",
  "images/photo10.jpg",
];

function openGallery() {
  const gallery = document.getElementById("galleryContainer");

  gallery.innerHTML = "";

  projectImages.forEach((img) => {
    gallery.innerHTML += `
            <img src="${img}" alt="Project Image">
        `;
  });

  document.getElementById("galleryModal").style.display = "block";
}

function closeGallery() {
  document.getElementById("galleryModal").style.display = "none";
}