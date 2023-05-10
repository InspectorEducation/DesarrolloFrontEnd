export default function filterMoviesBySearchTerm(movies, searchTerm) {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }