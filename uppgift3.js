const menuButton = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");
let ariaStatus = menuButton.getAttribute("aria-expanded", "aria-haspopup");

menuButton.addEventListener("click", () => {
  menuContent.classList.toggle("hiddenMenu");
  if (ariaStatus == "false") {
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-haspopup", "true");
  } else {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-haspopup", "false");
  }
  ariaStatus = menuButton.getAttribute("aria-expanded", "aria-haspopup");

  console.log(menuButton.getAttribute("aria-expanded"));
  console.log(menuButton.getAttribute("aria-haspopup"));
});

document.addEventListener("Keydown", function (e) {
  if (e.key == "Escape") {
    menuContent.classList.add("hiddenMenu");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-haspopup", "false");
  }
  ariaStatus = menuButton.getAttribute("aria-expanded", "aria-haspopup");

  console.log(menuButton.getAttribute("aria-expanded"));
  console.log(menuButton.getAttribute("aria-haspopup"));
});
