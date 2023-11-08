const artworkImages = ["artwork.jpg", "artwork1.jpg", "artwork3.jpg"];
const artworkTexts = ["Artwork 1", "Artwork 2", "Artwork 3"];
let currentArtworkIndex = 0;

const artworkImg = document.getElementById("artwork-img");
const artworkText = document.getElementById("artwork-title");
const nextArtworkArrow = document.getElementById("next-artwork-arrow");
const prevArtworkArrow = document.getElementById("prev-artwork-arrow");

nextArtworkArrow.addEventListener("click", () => {
    currentArtworkIndex = (currentArtworkIndex + 1) % artworkImages.length;
    updateArtwork();
});

prevArtworkArrow.addEventListener("click", () => {
    currentArtworkIndex = (currentArtworkIndex - 1 + artworkImages.length) % artworkImages.length;
    updateArtwork();
});

function updateArtwork() {
    artworkImg.src = artworkImages[currentArtworkIndex];
    artworkText.textContent = artworkTexts[currentArtworkIndex];
}

updateArtwork();
