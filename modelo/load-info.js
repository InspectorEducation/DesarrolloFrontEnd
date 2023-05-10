export default function loadInfo(movie) {
  // crea elementos HTML para mostrar la información
  const reseñaElemento = document.createElement("p");
  reseñaElemento.textContent = `Reseña: ${movie.reseña}`;

  const sinopsisElemento = document.createElement("p");
  sinopsisElemento.textContent = `Sinopsis: ${movie.sinopsis}`;

  const actoresElemento = document.createElement("ul");
  movie.actores.forEach((actor) => {
    const actorElemento = document.createElement("li");
    actorElemento.textContent = actor;
    actoresElemento.appendChild(actorElemento);
  });

  return { reseñaElemento, sinopsisElemento, actoresElemento };
}
