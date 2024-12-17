const popupBTN = document.getElementById("popupBTN");
const accessibleModal = document.getElementById("accessibleModal");
const closeModalBtn = document.getElementById("closeModalBtn");

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    toggle(accessibleModal);
  }
});

function toggle(e) {
  e.classList.remove("showPopup");
  e.classList.add("hidePopup");
}

popupBTN.addEventListener("click", () => {
  accessibleModal.classList.remove("hidePopup");
  accessibleModal.classList.add("showPopup");
  let openStateString = popupBTN.getAttribute("aria-expanded");
  let openStateBool = openStateString == true;
  popupBTN.setAttribute = ("aria-expanded", `${!openStateBool}`);
});

closeModalBtn.addEventListener("click", () => {
  accessibleModal.classList.remove("showPopup");
  accessibleModal.classList.add("hidePopup");
});
