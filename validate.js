export const MOVIE_REQUIRED = Symbol('movie-required')
export const RATE_REQUIRED = Symbol('rate-required')
export const INVALID_RATE = Symbol('invalid-rate')
export const INVALID_BUZZ_WORDS = Symbol('invalid-buzz-words')

const ALLOWED_WORDS = ['amazing', 'hilarious', 'sad', 'bad']

const validateBuzzWords = (...words) =>
  words.every(word => ALLOWED_WORDS.includes(word))

function validate({ movie = null, rate = null, buzzWords = [] } = {}) {
  if (!movie) return MOVIE_REQUIRED
  if (!rate) return RATE_REQUIRED

  const nbRate = Number(rateForm.rate.value)
  if (!Number.isInteger(nbRate) || nbRate < 1 || nbRate > 5) return INVALID_RATE

  if (buzzWords.length && !validateBuzzWords(...buzzWords)) {
    return INVALID_BUZZ_WORDS
  }

  return null
}

export default validate
