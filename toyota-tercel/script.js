const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
link.addEventListener("click", () => {
navLinks.classList.remove("active");
});
});

// Animación suave al aparecer elementos
const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("visible");
}
});
},
{
threshold: 0.15
}
);

document
.querySelectorAll(
".timeline-item, .generation-card, .gallery-item, .spec"
)
.forEach((element) => {
element.style.opacity = "0";
element.style.transform = "translateY(25px)";
element.style.transition =
"opacity .7s ease, transform .7s ease";

    observer.observe(element);
});


// Clase para activar la animación
const style = document.createElement("style");

style.textContent = .timeline-item.visible, .generation-card.visible, .gallery-item.visible, .spec.visible { opacity: 1 !important; transform: translateY(0) !important; };

document.head.appendChild(style);
