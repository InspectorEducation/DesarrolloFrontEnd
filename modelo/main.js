import phones from "../controlador/movies.js";
import filterMoviesBySearchTerm from "./search.js";
import { sortPhonesByPrice } from "./sort.js";
import { sortPhonesByRating } from "./sort.js";
import loadInfo from "./load-info.js";

const phoneList = document.getElementById("phone-list");

const searchInput = document.querySelector(".search-input");

const filterSelect = document.getElementById("filter-select");

function renderMovies(phones) {
  phoneList.innerHTML = "";

  phones.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h4");
    title.classList.add("card-title");
    title.textContent = movie.title;

    const pricePhone = document.createElement("p");
    pricePhone.classList.add("card-text");
    pricePhone.textContent = `Precio HOY`;

    const price = document.createElement("H2");
    price.classList.add("card-price");
    price.textContent = `${movie.releaseYear}`

    const rating = document.createElement("p");
    rating.classList.add("card-text");
    rating.textContent = `Opiniones: ${movie.rating} Estrellas`;

    const img = document.createElement("img");
    img.classList.add("card-img");
    img.src = movie.img;
    img.width = 400;
    img.height = 500;
    img.style.display = "block";
    img.style.margin = "0 auto";

    const linebreak = document.createElement("blockquote");
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.classList.add("btn-info");
    btn.textContent = "Mas info";
    btn.id = movie.id;

    cardBody.appendChild(title);
    cardBody.appendChild(pricePhone);
    pricePhone.appendChild(price);
    cardBody.appendChild(rating);
    cardBody.appendChild(img);
    cardBody.appendChild(linebreak);
    cardBody.appendChild(btn);
    card.appendChild(cardBody);
    phoneList.appendChild(card);
  });

  phones.forEach((phone) => {
    let btnCargarInfo = document.querySelector(`#${phone.id}`);

    btnCargarInfo.addEventListener(
      "click",
      function () {
        let info = loadInfo(phone);

        // agrega los elementos al contenedor correspondiente
        btnCargarInfo.appendChild(info.reseñaElemento);
        btnCargarInfo.appendChild(info.sinopsisElemento);
        btnCargarInfo.appendChild(info.actoresElemento);
      },
      { once: true }
    );
  });
}

// Initial render of the movies
renderMovies(phones);

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim();
  const filteredPhones = filterMoviesBySearchTerm(phones, searchTerm);
  renderMovies(filteredPhones);
});

filterSelect.addEventListener("change", () => {
  const sortMethod = filterSelect.value;
  let sortedPhones;
  if (sortMethod === "net_price") {
    sortedPhones = sortPhonesByPrice(phones);
  } else if (sortMethod === "rating") {
    sortedPhones = sortPhonesByRating(phones);
  }
  console.log(sortedPhones)
  renderMovies(sortedPhones);
});
