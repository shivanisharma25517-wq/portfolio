/* =====================================
   PAWPRINT UNIVERSE
   Interactive JavaScript
===================================== */


/* 1. FLOATING PAW PRINTS */

const pawContainer = document.getElementById("pawContainer");

for (let i = 0; i < 18; i++) {

    const paw = document.createElement("div");

    paw.classList.add("floating-paw");
    paw.innerHTML = '<i class="fas fa-paw"></i>';

    paw.style.left = Math.random() * 100 + "%";
    paw.style.animationDelay = Math.random() * 12 + "s";
    paw.style.animationDuration = (10 + Math.random() * 12) + "s";
    paw.style.fontSize = (15 + Math.random() * 20) + "px";

    pawContainer.appendChild(paw);
}


/* 2. FLOATING STARS */

const starContainer = document.getElementById("starContainer");

for (let i = 0; i < 25; i++) {

    const star = document.createElement("div");

    star.classList.add("floating-star");
    star.innerHTML = "✦";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.fontSize = (8 + Math.random() * 15) + "px";
    star.style.animationDelay = Math.random() * 4 + "s";

    starContainer.appendChild(star);
}


/* 3. MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* CLOSE MENU AFTER CLICKING A LINK */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* 4. SCROLL REVEAL ANIMATION */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-main, .about-side, .skill-card, .project-card, .education-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* 5. STAGGERED SKILL CARD ANIMATION */

document.querySelectorAll(".skill-card").forEach((card, index) => {

    card.style.transitionDelay = (index * 100) + "ms";

});


/* 6. STAGGERED PROJECT ANIMATION */

document.querySelectorAll(".project-card").forEach((card, index) => {

    card.style.transitionDelay = (index * 150) + "ms";

});


/* 7. MOUSE TILT EFFECT ON CARDS */

const tiltCards = document.querySelectorAll(
    ".skill-card, .project-card"
);

tiltCards.forEach(card => {

    card.addEventListener("mousemove", function (event) {

        if (window.innerWidth <= 950) return;

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (centerY - y) / 18;
        const rotateY = (x - centerX) / 18;

        card.style.transform =
            `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "";

    });

});


/* 8. NAVBAR SCROLL EFFECT */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 8px 30px rgba(81,68,93,0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


/* 9. CUSTOM PAW CURSOR TRAIL */

let lastPawTime = 0;

document.addEventListener("mousemove", function (event) {

    if (window.innerWidth <= 768) return;

    const now = Date.now();

    if (now - lastPawTime < 180) return;

    lastPawTime = now;

    const paw = document.createElement("span");

    paw.innerHTML = "🐾";

    paw.style.position = "fixed";
    paw.style.left = event.clientX + "px";
    paw.style.top = event.clientY + "px";
    paw.style.fontSize = "17px";
    paw.style.pointerEvents = "none";
    paw.style.zIndex = "9999";
    paw.style.opacity = "0.55";
    paw.style.transform = "translate(-50%, -50%)";
    paw.style.transition = "all 1s ease";

    document.body.appendChild(paw);

    requestAnimationFrame(() => {

        paw.style.opacity = "0";
        paw.style.transform =
            "translate(-50%, -90%) scale(0.5)";

    });

    setTimeout(() => {
        paw.remove();
    }, 1000);

});


/* 10. CONSOLE MESSAGE */

console.log(
    "🐾 Welcome to Pawprint Universe! Keep exploring and creating."
);