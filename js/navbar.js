document.addEventListener("DOMContentLoaded", () => {
  fetch("components/navbar.html")
    .then((res) => res.text())
    .then((data) => {
      
      document.getElementById("navbar").innerHTML = data;
      console.log("Navbar Loaded:", data);  

      setupHamburgerMenu();
    })
    .catch((err) => console.error("Error loading navbar:", err)); 
});

function setupHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navbar-menu");

  if (!hamburger || !navMenu) {
    console.error("Hamburger or navbar menu not found.");
    return;
  }

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log("Hamburger clicked, menu toggled");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      console.log("Nav link clicked, closing menu");
    });
  });

  const observer = new MutationObserver(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar-menu");
    if (hamburger && navMenu) {
      observer.disconnect();
      setupHamburgerMenu();
    }
  });

  observer.observe(document.getElementById("navbar"), {
    childList: true, 
    subtree: true,   
  });
}
