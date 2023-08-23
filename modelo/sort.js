export function sortPhonesByRating(phones) {
    return phones.sort((a, b) => b.rating - a.rating);
  }

export function sortPhonesByPrice(phones) {
  return phones.sort((a, b) => a.price - b.price);
}