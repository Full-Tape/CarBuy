const tabItems = document.querySelectorAll(".tabs__btn-item");
const tabContents = document.querySelectorAll(".tabs__content-item");

tabItems.forEach((e) => {
  e.addEventListener("click", (e) => {
    const tabBtnTarget = e.currentTarget;
    const dataButton = tabBtnTarget.dataset.button;
    const tabContentTarget = document.querySelector(`#${dataButton}`);

    tabItems.forEach((e) => {
      e.classList.remove("tabs__btn-item-active");
    });

    tabContents.forEach((e) => {
      e.classList.remove("tabs__content-item-active");
    });

    tabBtnTarget.classList.add("tabs__btn-item-active");
    tabContentTarget.classList.add("tabs__content-item-active");
  });
});
  