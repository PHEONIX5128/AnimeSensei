document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.querySelector(".stars-container");
    if (!starsContainer) return; // Prevent errors if the container is missing

    for (let i = 0; i < 250; i++) {  
        let star = document.createElement("div");
        star.classList.add("star");

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let size = Math.random() * 2.5 + 0.5;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random speed for movement
        let speed = Math.random() * 500 + 1000;
        star.style.animationDuration = `${Math.random() * 3 + 2}s, ${speed}s`;

        starsContainer.appendChild(star);
    }
});

// Shooting Star Effect
function createShootingStar() {
    let star = document.createElement("div");
    star.classList.add("shooting-star");

    let startX = Math.random() * window.innerWidth * 0.9 + (window.innerWidth * 0.1);
    let startY = Math.random() * window.innerHeight * 0.5;

    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 3000);
}

// Shooting stars appear every 5-10 seconds
setInterval(() => {
    createShootingStar();
}, Math.random() * 5000 + 5000); // Corrected range

const musicButton = document.getElementById("music-btn");
const musicIcon = document.getElementById("music-icon");
const bgMusic = document.getElementById("bg-music");

// 🎵 BGM Tracks
const tracks = [
    "bg1.mp3",
    "bg1.mp3",
    "bg2.mp3"
];

let currentTrack = 0;

if (bgMusic) {
    bgMusic.src = tracks[currentTrack]; 
    bgMusic.volume = 1;  
}

// ⏯ Auto-Play After User Interaction
document.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play().catch(err => console.log("Autoplay blocked:", err));
    }
}, { once: true }); // Runs only once

// ⏩ Next Track on End
bgMusic.addEventListener("ended", () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    bgMusic.src = tracks[currentTrack];
    bgMusic.load(); // Ensure track is loaded
    bgMusic.play().catch(err => console.log("Error playing:", err));
});

// 🎵 Toggle Play/Pause
if (musicButton && musicIcon && bgMusic) {
    musicButton.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicIcon.src = "icons8-pause-64.png";
        } else {
            bgMusic.pause();
            musicIcon.src = "icons8-play-64.png";
        }
    });
}


// 🍔 Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-menu");

    if (!hamburger || !navLinks) return; // Prevent errors if elements are missing

    hamburger.addEventListener("click", (event) => {
        event.stopPropagation();
        navLinks.classList.toggle("show");
    });

    document.addEventListener("click", (event) => {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("show");
        }
    });
});
