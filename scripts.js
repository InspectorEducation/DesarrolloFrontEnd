const movieList = document.getElementById('movie-list');

const searchInput = document.querySelector('.search-input');

const filterSelect = document.getElementById('filter-select');

const movies = [
  { 
    title: 'Avatar', releaseYear: 2009, rating: 7.8 +' IMDb', id:'info1',
  img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1430A47DDD532CE6292009B3CF2080145C771904DF2F472021F2EC6075D0761C/scale?width=1200&aspectRatio=1.78&format=jpeg'
  },
  { title: 'Blade Cazador de vampiros', releaseYear: 1998, rating: 7.1+' IMDb',id:'info2',
  img:'https://hbomax-images.warnermediacdn.com/images/GXt_r5AwEa8PCwgEAAAsi/tileburnedin?size=1280x720&partner=hbomaxcom&v=47750e98cb3ab92f0052e9ed0aefb69a&host=art-gallery.api.hbo.com&language=es-419&w=1280'
  },
  { title: 'Blade Runner 2048', releaseYear: 2017, rating: 8.1+' IMDb',id:'info3',
    img:'https://img.asmedia.epimg.net/resizer/0F6DytNBTgaS9SDzInW8W5deHgA=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/YUQJG26FQFKPNIL4WQ5LXVMKJI.jpg'
  },
  { title: 'La Naranja Mecanica', releaseYear: 1971, rating: 8.2+' IMDb',id:'info4',
    img:'https://www.el-parnasillo.com/naranjamecanica/la-naranja-mecanica-poster.jpg'
  }
];

function renderMovies(movies) {
  
  movieList.innerHTML = '';

  movies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = movie.title;
    const releaseYear = document.createElement('p');
    releaseYear.classList.add('card-text');
    releaseYear.textContent = `Fecha de lanzamiento: ${movie.releaseYear}`;
    const rating = document.createElement('p');
    rating.classList.add('card-text');
    rating.textContent = `Calificación: ${movie.rating}`;
    const img = document.createElement('img')
    img.classList.add('card-img');
    img.src = movie.img;
    const btn = document.createElement('button')
    btn.classList.add('btn');
    btn.classList.add('btn-info');
    btn.textContent = 'Mas info';
    btn.id = movie.id;
    cardBody.appendChild(title);
    cardBody.appendChild(releaseYear);
    cardBody.appendChild(rating);
    cardBody.appendChild(img);
    cardBody.appendChild(btn);
    card.appendChild(cardBody);
    movieList.appendChild(card);
  });
}

// Initial render of the movies
renderMovies(movies);

const btnCargarInfoAvatar = document.querySelector('#info1');

btnCargarInfoAvatar.addEventListener('click', cargarInformacionAvatar);

const btnCargarInfoBlade = document.querySelector('#info2');

btnCargarInfoBlade.addEventListener('click', cargarInformacionBlade);

const btnCargarInfoBladeRunner = document.querySelector('#info3');

btnCargarInfoBladeRunner.addEventListener('click', cargarInformacionBladeRunner);

const btnCargarInfoNaranja = document.querySelector('#info4');

btnCargarInfoNaranja.addEventListener('click', cargarInformacionNaranja);

function cargarInformacionAvatar() {
  const reseña = 'A nivel visual y técnico Avatar (2009) es la película de ciencia ficción impresionante y sorprendentemente más espectacular y la más grandilocuente, y también es una de las más innovadoras y ambiciosas película de todos los tiempos en la historia';
  const sinopsis = 'En un exuberante planeta llamado Pandora viven los Navi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados. Debido a que el ambiente de Pandora es venenoso, los híbridos humanos/Navi, llamados Avatares.';
  const actores = ['Zoe Saldaña', 'Sam Worthington', 'Giovanni Ribisi'];

  // crea elementos HTML para mostrar la información
  const reseñaElemento = document.createElement('p');
  reseñaElemento.textContent = `Reseña: ${reseña}`;

  const sinopsisElemento = document.createElement('p');
  sinopsisElemento.textContent = `Sinopsis: ${sinopsis}`;

  const actoresElemento = document.createElement('ul');
  actores.forEach(actor => {
    const actorElemento = document.createElement('li');
    actorElemento.textContent = actor;
    actoresElemento.appendChild(actorElemento);
  });

  // agrega los elementos al contenedor correspondiente
  btnCargarInfoAvatar.appendChild(reseñaElemento);
  btnCargarInfoAvatar.appendChild(sinopsisElemento);
  btnCargarInfoAvatar.appendChild(actoresElemento);
}

function cargarInformacionBlade() {
  const reseña = 'Que decir de esta tremenda película. Innovadora en el género vampiros y superhéroes. Wesley snipes está a la altura del personaje o incluso lo agranda. Un estilo único y propio que mezcla la antiguo y lo moderno,lo clásico y lo novedoso.';
  const sinopsis = 'Un hombre medio mortal, medio vampiro y capaz de andar bajo la luz solar, trata de vengar la muerte de su madre e impedir que los vampiros dominen el mundo. Estos han desarrollado una novedosa tecnología y tan solo necesitan hallar un tipo sanguíneo concreto para así poder invocar a una deidad maligna que juega un papel fundamental en sus planes.';
  const actores = ['Wesley Snipes', 'Donal Logue', 'Kris Kristofferson'];

  // crea elementos HTML para mostrar la información
  const reseñaElemento = document.createElement('p');
  reseñaElemento.textContent = `Reseña: ${reseña}`;

  const sinopsisElemento = document.createElement('p');
  sinopsisElemento.textContent = `Sinopsis: ${sinopsis}`;

  const actoresElemento = document.createElement('ul');
  actores.forEach(actor => {
    const actorElemento = document.createElement('li');
    actorElemento.textContent = actor;
    actoresElemento.appendChild(actorElemento);
  });

  // agrega los elementos al contenedor correspondiente
  btnCargarInfoBlade.appendChild(reseñaElemento);
  btnCargarInfoBlade.appendChild(sinopsisElemento);
  btnCargarInfoBlade.appendChild(actoresElemento);
}

function cargarInformacionBladeRunner() {
  const reseña = 'Cinta dirigida por Ridley Scott (director de Gladiator y Alien) nos trajo una obra maestra, marcaría un antes y después en la industria del cine. Considerada película de culto para muchos. El cineasta británico hizo uno de sus mejores trabajos junto a Gladiator y Alien.';
  const sinopsis = 'En un futuro sombrío y lluvioso, un expolicía vuelve al servicio para buscar y destruir a un grupo de androides que fingen ser humanos para, integrados en la sociedad, encontrar a su creador y matarlo.';
  const actores = ['Harrison Ford', 'William Sanderson', 'Joanna Cassidy'];

  // crea elementos HTML para mostrar la información
  const reseñaElemento = document.createElement('p');
  reseñaElemento.textContent = `Reseña: ${reseña}`;

  const sinopsisElemento = document.createElement('p');
  sinopsisElemento.textContent = `Sinopsis: ${sinopsis}`;

  const actoresElemento = document.createElement('ul');
  actores.forEach(actor => {
    const actorElemento = document.createElement('li');
    actorElemento.textContent = actor;
    actoresElemento.appendChild(actorElemento);
  });

  // agrega los elementos al contenedor correspondiente
  btnCargarInfoBladeRunner.appendChild(reseñaElemento);
  btnCargarInfoBladeRunner.appendChild(sinopsisElemento);
  btnCargarInfoBladeRunner.appendChild(actoresElemento);
}

function cargarInformacionNaranja() {
  const reseña = 'Es una obra de arte. Una pelicula que se anticipó a todas las que vinieron despues sobe la violencia y la protesta juvenil. Supo combinar la violencia interior de los personajes con la exterior y no cayo en la tentación de achacarla solo a los jóvens sino que hace un escrutinio de una sociedad que inevitablemente conduce al conflcto personal y social.';
  const sinopsis = 'Un criminal en la Inglaterra del futuro pasa una serie de procesos experimentales para corregir sus impulsos violentos.';
  const actores = ['Malcolm McDowell', 'Miriam Karlin', 'Adrienne Corri'];

  // crea elementos HTML para mostrar la información
  const reseñaElemento = document.createElement('p');
  reseñaElemento.textContent = `Reseña: ${reseña}`;

  const sinopsisElemento = document.createElement('p');
  sinopsisElemento.textContent = `Sinopsis: ${sinopsis}`;

  const actoresElemento = document.createElement('ul');
  actores.forEach(actor => {
    const actorElemento = document.createElement('li');
    actorElemento.textContent = actor;
    actoresElemento.appendChild(actorElemento);
  });

  // agrega los elementos al contenedor correspondiente
  btnCargarInfoNaranja.appendChild(reseñaElemento);
  btnCargarInfoNaranja.appendChild(sinopsisElemento);
  btnCargarInfoNaranja.appendChild(actoresElemento);
}

function filterMoviesBySearchTerm(movies, searchTerm) {
  return movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
}

function sortMoviesByReleaseYear(movies) {
  return movies.sort((a, b) => a.releaseYear - b.releaseYear);
}

function sortMoviesByRating(movies) {
  return movies.sort((a, b) => b.rating - a.rating);
}

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.trim();
  const filteredMovies = filterMoviesBySearchTerm(movies, searchTerm);
  renderMovies(filteredMovies);
});

filterSelect.addEventListener('change', () => {
  const sortMethod = filterSelect.value;
  let sortedMovies;
  if (sortMethod === 'date') {
    sortedMovies = sortMoviesByReleaseYear(movies);
  } else if (sortMethod === 'rating') {
    sortedMovies = sortMoviesByRating(movies);
  }
  renderMovies(sortedMovies);
});
