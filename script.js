document.addEventListener("DOMContentLoaded", function () {
  const productsList = document.querySelector(".products__list");
  const productsSection = document.querySelector(".products");
  const itemsPageSize = document.getElementById("number-of-products");
  const popup = document.querySelector(".popup");
  const overlay = document.querySelector(".overlay");
  const popupId = document.getElementById("popup-id");
  const popupName = document.getElementById("popup-name");
  const popupImage = document.getElementById("popup-image");
  const popupCloseBtn = document.getElementById("popup-close");
  const header = document.querySelector(".header");

  const burgerMenu = document.querySelector(".burger-menu");
  const navigation = document.querySelector(".header__menu");

  let pageNumber = 1;
  let pageSize = 20;
  let loadingData = false;
  let isLoaded = false;

  function fetchProducts() {
    //funkcja pobierająca dane. Czas Rozpoczęcia 13:00
    if (loadingData) return;
    loadingData = true;

    fetch(
      `https://brandstestowy.smallhost.pl/api/random?pageNumber=${pageNumber}&pageSize=${pageSize}`
    )
      .then((res) => res.json())
      .then((productsData) => {
        productsData.data.forEach((product) => {
          const productElement = document.createElement("div");
          productElement.classList.add("products__item");
          productElement.innerHTML = `<span>id: ${product.id}</span>`;
          productElement.addEventListener("click", () => openPopup(product));
          productsList.appendChild(productElement);
        });
        pageNumber++;
        loadingData = false;
      })
      .catch((error) => {
        console.error("Błąd pobierania danych", error);
      });
  }

  window.addEventListener("scroll", function () {
    if (
      !isLoaded &&
      productsSection.getBoundingClientRect().top < window.innerHeight
    ) {
      isLoaded = true;
      fetchProducts();
    }

    if (
      window.innerHeight + this.window.scrollY >=
      document.body.offsetHeight - 50
    ) {
      fetchProducts();
    }
  });

  itemsPageSize.addEventListener("change", function (event) {
    pageSize = parseInt(event.target.value);
    pageNumber = 1;
    productsList.innerHTML = "";
    fetchProducts();
    //Czas zakończenia 13:36
  });

  function openPopup(product) {
    //funkcja otwierająca i zamykająca popup. Czas Rozpoczęcia 13:45
    popupId.innerHTML = `id ${product.id}`;
    popupName.innerHTML = `Nazwa: ${product.text}`;
    popupImage.src = product.image;

    popup.style.display = "flex";
    overlay.style.display = "block";

    popupCloseBtn.addEventListener("click", function () {
      popup.style.display = "none";
      overlay.style.display = "none";
      //Czas zakończenia 14:10
    });
  }

  document.querySelectorAll(".header__link").forEach((link) => {
    // Funkcja pozwalająca po kliknięciu w przycisk w nawigacji przeskrolować się do odpowiedniej sekcji. Czas Rozpoczęcia 01:00 - 7.03
    link.addEventListener("click", function (event) {
      event.preventDefault();

      document
        .querySelectorAll(".header__menu-item")
        .forEach((link) => link.classList.remove("active"));
      this.parentElement.classList.add("active");

      const targetClass = this.id;
      const targetSection = document.querySelector(`.${targetClass}`);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - header.offsetHeight,
          behavior: "smooth",
        });
      }
    });
    //Czas zakończenia 01:10
  });

  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");

    let currentSection = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (
        rect.top - header.offsetHeight - 10 <= 0 &&
        rect.bottom - header.offsetHeight - 10 >= 0
      ) {
        currentSection = section.classList[1];
      }
    });

    document
      .querySelectorAll(".header__menu-item")
      .forEach((link) => link.classList.remove("active"));

    const activeItem = document.getElementById(`${currentSection}`);
    if (activeItem) {
      activeItem.parentElement.classList.add("active");
    }
  });

  burgerMenu.addEventListener("click", function () {
    navigation.classList.toggle("active");
  });
});
