const elForm = document.querySelector(".appoint__form");
const elServiceItems = document.querySelectorAll(".services__list-item");
const elDoctorsItems = document.querySelectorAll(".doctors__items");
const elIntroBookTitle = document.querySelector(".intro__book-title");
const elIntroBookText = document.querySelector(".intro__book-text");
const elDoctorsItemsText = document.querySelectorAll(
  ".doctors__items-top-text"
);
const elDoctorsItemsTitle = document.querySelectorAll(".doctors__items-title");
const elIntroBookImg = document.querySelector(".intro__book-img");
const elDoctorsImg = document.querySelectorAll(".doctors__img");
const elIntroBook = document.querySelector(".intro__book");
const elCloseBook = document.querySelector(".intro__book-close");
const elIntroBookForm = document.querySelector(".intro__book-form");
const elIntroChooseCard = document.querySelector(".intro__choose-card");
const elIntroTextSpan = document.querySelectorAll(".intro__choose-span");
const elBookChoose = document.querySelector(".intro__book-choose");
// let showBook = false;
elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  elForm.reset();
});

function elDoctorsItemsF(index) {
  elIntroBookTitle.textContent = `${elDoctorsItemsTitle[index].textContent}`;
  elIntroBookText.textContent = `${elDoctorsItemsText[index].textContent}`;
  elIntroBookImg.src = elDoctorsImg[index].src;
  if (window.innerWidth > 1080) {
    elIntroBook.style.cssText = `
    animation-name: showBook;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  `;
  } else {
    elIntroBook.style.cssText = `
      visibility: visible;
    `;
  }
  // showBook = true;
}

function elTextSpan(index) {
  elIntroTextSpan[0].textContent = elIntroTextSpan[index].textContent;
  console.log("2");

  elIntroChooseCard.style.cssText = `
    visibility:hidden;
  `;
}

elBookChoose.addEventListener("click", () => {
  console.log("1");

  elIntroChooseCard.style.cssText = `
    visibility: visible;
    animation-name: showBook;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  `;
});

elIntroTextSpan[1].addEventListener("click", () => {
  elTextSpan(1);
});
elIntroTextSpan[2].addEventListener("click", () => {
  elTextSpan(2);
});
elIntroTextSpan[3].addEventListener("click", () => {
  elTextSpan(3);
});

elDoctorsItems[0].addEventListener("click", () => {
  elDoctorsItemsF(0);
});

elDoctorsItems[1].addEventListener("click", () => {
  elDoctorsItemsF(1);
});
elDoctorsItems[2].addEventListener("click", () => {
  elDoctorsItemsF(2);
});

window.addEventListener("resize", () => {
  elIntroBook.style.cssText = `
    visibility: hidden;
  `;
  elIntroChooseCard.style.cssText = `
    visibility:hidden;
  `;
});

elCloseBook.addEventListener("click", () => {
  elIntroBook.style.cssText = `
    visibility: hidden;
  `;
  elIntroChooseCard.style.cssText = `
    visibility:hidden;
  `;
});

elIntroBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  elIntroBookForm.reset();
});
