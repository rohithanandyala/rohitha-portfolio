// Simple interactivity: highlight section on click from nav
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute("href").substring(1);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  });
});
