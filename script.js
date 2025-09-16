// Navbar scroll effect
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "#000";
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.7)";
  }
});

// Responsive menu toggle (for mobile)
const nav = document.querySelector("nav ul");
const toggleBtn = document.createElement("div");
toggleBtn.classList.add("menu-toggle");
toggleBtn.innerHTML = "☰";
document.getElementById("navbar").appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});
