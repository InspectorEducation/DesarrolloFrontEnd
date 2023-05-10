import movies from "../controlador/movies.js";
import filterMoviesBySearchTerm from "./search.js";
import { sortMoviesByReleaseYear } from "./sort.js";
import { sortMoviesByRating } from "./sort.js";
import loadInfo from "./load-info.js";

const movieList = document.getElementById("movie-list");

const searchInput = document.querySelector(".search-input");

const filterSelect = document.getElementById("filter-select");

function renderMovies(movies) {
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = movie.title;
    const releaseYear = document.createElement("p");
    releaseYear.classList.add("card-text");
    releaseYear.textContent = `Fecha de lanzamiento: ${movie.releaseYear}`;
    const rating = document.createElement("p");
    rating.classList.add("card-text");
    rating.textContent = `Calificación: ${movie.rating} IMDb`;
    const img = document.createElement("img");
    img.classList.add("card-img");
    img.src = movie.img;
    const linebreak = document.createElement("blockquote");
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.classList.add("btn-info");
    btn.textContent = "Mas info";
    btn.id = movie.id;
    cardBody.appendChild(title);
    cardBody.appendChild(releaseYear);
    cardBody.appendChild(rating);
    cardBody.appendChild(img);
    cardBody.appendChild(linebreak);
    cardBody.appendChild(btn);
    card.appendChild(cardBody);
    movieList.appendChild(card);
  });

  movies.forEach((movie) => {
    let btnCargarInfo = document.querySelector(`#${movie.id}`);

    btnCargarInfo.addEventListener(
      "click",
      function () {
        let info = loadInfo(movie);

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
renderMovies(movies);

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim();
  const filteredMovies = filterMoviesBySearchTerm(movies, searchTerm);
  renderMovies(filteredMovies);
});

filterSelect.addEventListener("change", () => {
  const sortMethod = filterSelect.value;
  let sortedMovies;
  if (sortMethod === "date") {
    sortedMovies = sortMoviesByReleaseYear(movies);
  } else if (sortMethod === "rating") {
    sortedMovies = sortMoviesByRating(movies);
  }
  renderMovies(sortedMovies);
});
