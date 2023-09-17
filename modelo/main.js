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

    const calificarlabel = document.createElement("calificarlabel");
    calificarlabel.classList.add("card-text");
    calificarlabel.textContent = `Agrega aqui tu calificación`;

    const textarea = document.createElement("textarea");
    textarea.classList.add("card-textarea");
    textarea.style.width = "420px";
    textarea.style.height = "90px";
    textarea.placeholder = "Y escribe tu reseña ";
 
 
    const publicar = document.createElement("button");
    publicar.classList.add("btn");
    publicar.classList.add("btn-primary"); // Cambia la clase a "btn-primary" para obtener un estilo similar a "Publicar"
    publicar.textContent = "Publicar"; 
    
    publicar.addEventListener('click', () => {
      alert("Comentario creado"); // Mostrar un mensaje cuando se haga clic en el botón
    });

    cardBody.appendChild(title);
    cardBody.appendChild(pricePhone);
    pricePhone.appendChild(price);
    cardBody.appendChild(rating);
    cardBody.appendChild(btn);
    cardBody.appendChild(img);
    cardBody.appendChild(linebreak);
    cardBody.appendChild(calificarlabel);
    cardBody.appendChild(linebreak);
    card.appendChild(cardBody);
    phoneList.appendChild(card);


    const maxStars = 5; // Cantidad máxima de estrellas
    const selectedRatings = {}

    for (let i = maxStars; i >= 1; i--) {
      const starLabel = document.createElement('label');
      starLabel.htmlFor = `star${i}${movie.title}`;
      starLabel.innerText = '\u2605'; // Icono de estrella (☆)

      // Aplicar estilos a las estrellas
      starLabel.style.display = 'inline-block';
      starLabel.style.position = 'relative';
      starLabel.style.width = '1.1em';
      starLabel.style.fontSize = '24px';
      starLabel.style.color = '#ccc';
      starLabel.style.cursor = 'pointer';
      starLabel.style.marginRight = '5px';

      starLabel.addEventListener('mouseover', () => {
          updateStarColors(movie.title, i);
      });

      starLabel.addEventListener('mouseout', () => {
          updateStarColors(movie.title, selectedRatings[movie.title] || 0);
      });

      starLabel.addEventListener('click', () => {
          selectedRatings[movie.title] = i;
          console.log(`${movie.title}: Calificación seleccionada: ${selectedRatings[movie.title]}`);
          updateStarColors(movie.title, selectedRatings[movie.title]);
      });

      cardBody.appendChild(linebreak);
      cardBody.appendChild(starLabel);
      cardBody.appendChild(linebreak);
      cardBody.appendChild(textarea);
      cardBody.appendChild(linebreak);
      cardBody.appendChild(publicar);
       
    }
    
  
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

function updateStarColors(title, rating) {
  for (let j = 1; j <= 5; j++) {
      const currentStarLabel = document.querySelector(`label[for='star${j}${title}']`);
      if (j <= rating) {
          currentStarLabel.style.color = '#FFD700';
      } else {
          currentStarLabel.style.color = '#ccc';
      }
  }
}


