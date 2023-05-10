export function sortMoviesByReleaseYear(movies) {
    return movies.sort((a, b) => a.releaseYear - b.releaseYear);
  }
  
export function sortMoviesByRating(movies) {
    return movies.sort((a, b) => b.rating - a.rating);
  }