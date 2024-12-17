const popupBTN = document.getElementById("popupBTN");
const accessibleDialog = document.getElementById("accessibleDialog");
const closeDialogBTN = document.getElementById("closeDialogBTN");

// VANLIGA KLICKFUNKTIONER
// popupBTN.addEventListener("click", () => {
//   const isOpen = popupBTN.getAttribute("aria-expanded") === "true";
//   accessibleDialog.classList.toggle("hidePopup", isOpen);
//   accessibleDialog.classList.toggle("showPopup", !isOpen);
//   popupBTN.setAttribute("aria-expanded", !isOpen);
//   closeDialogBTN.focus();
// });

popupBTN.addEventListener("click", () => {
  accessibleDialog.showModal();
});

closeDialogBTN.addEventListener("click", () => {
  accessibleDialog.close();
});

// closeDialogBTN.addEventListener("click", () => {
//   accessibleDialog.classList.remove("showPopup");
//   accessibleDialog.classList.add("hidePopup");
//   popupBTN.setAttribute("aria-expanded", "false");
//   popupBTN.focus();
// });

// ESC FUNKTIONER
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && accessibleDialog.classList.contains("showPopup")) {
    accessibleDialog.classList.remove("showPopup");

    popupBTN.setAttribute("aria-expanded", "false");
    popupBTN.focus();
  }
});
