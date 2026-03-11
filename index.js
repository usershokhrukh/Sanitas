// --- Selectors ---
const doctorsCards = document.querySelectorAll(".doctors__items");
const docTitles = document.querySelectorAll(".doctors__items-title");
const docSpecs = document.querySelectorAll(".doctors__items-top-text");
const docImages = document.querySelectorAll(".doctors__img");

const bookingModal = document.querySelector(".booking-modal");
const modalImg = document.querySelector(".booking-modal__image");
const modalBadge = document.querySelector(".booking-modal__badge");
const modalName = document.querySelector(".booking-modal__doctor-name");
const closeBtn = document.querySelector(".booking-modal__close");
const bookingForm = document.querySelector(".booking-modal__form");

const navbarProfile = document.querySelector(".navbar__profile");
const medicalRecord = document.querySelector(".medical-record");

// --- 1. Medical Record Sidebar ---
navbarProfile.addEventListener("click", () => {
  medicalRecord.classList.toggle("none");
});

// --- 2. Modalni ochish funksiyasi ---
doctorsCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    // Ma'lumotlarni rasmda ko'rsatilganidek to'ldirish
    modalImg.src = docImages[index].src;
    modalBadge.textContent = docSpecs[index].textContent;
    modalName.textContent = docTitles[index].textContent;

    // Modalni ko'rsatish
    bookingModal.classList.remove("none");
    // document.body.style.overflow = "hidden"; // Orqa fonni qotirish
  });
});

// --- 3. Modalni yopish funksiyasi ---
const closeModal = () => {
  bookingModal.classList.add("none");
  document.body.style.overflow = "auto";
};

// Yopish tugmasi (X) endi aniq ishlaydi
closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  closeModal();
});

// Modal tashqarisini (overlay) bosganda yopish
window.addEventListener("click", (e) => {
  if (e.target === bookingModal) {
    closeModal();
  }
});

// ESC tugmasini bosganda yopish
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// --- 4. Formani yuborish ---
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Xabaringiz yuborildi!");
  bookingForm.reset();
  closeModal();
});

// Ekran o'lchami o'zgarganda xatolik bo'lmasligi uchun yopish
window.addEventListener("resize", closeModal);
