const galeriImages = document.querySelectorAll(".galeri-img");
const modalImage = document.getElementById("modalImage");

galeriImages.forEach(img => {
    img.addEventListener("click", () => {
        modalImage.src = img.src;
        modalImage.alt = img.alt || "Büyük Resim";
    });
});