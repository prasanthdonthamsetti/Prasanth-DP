const gallery = document.getElementById("gallery");

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close-modal");

fetch("projects.json")
  .then((res) => res.json())
  .then((data) => {
    const filtered = data.filter((item) => item.category === category);

    filtered.forEach((item) => {
      gallery.innerHTML += `
        <div class="card">
          <img
            src="${item.image}"
            data-image="${item.image}"
            data-description="${item.description}"
            class="gallery-image"
            alt="${item.description}">
        </div>
      `;
    });
  });

// Image click
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-image")) {
    modal.style.display = "flex";
    modalImage.src = e.target.dataset.image;
    modalDescription.textContent = e.target.dataset.description;
  }
});

// Close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Click outside image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ESC key close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});