import Review from './review'

export default class MovieReview extends Review {
  static MOVIE_REQUIRED = Symbol('movie-required')
  static INVALID_BUZZ_WORDS = Symbol('invalid-buzz-words')

  getBuzzWords() {
    return this.raw.buzzwords
      .split(',')
      .map(word => word.trim().toLowerCase())
      .filter(word => word)
  }

  validate() {
    const invalidReason = super.validate()

    if (invalidReason) return invalidReason

    if (!this.raw.movie) return this.constructor.MOVIE_REQUIRED

    if (!areBuzzWordsValid(this.getBuzzWords()))
      return this.constructor.INVALID_BUZZ_WORDS

    return null
  }

  toString() {
    return `Movie ${this.raw.movie}, rated ${this.raw.rate}, buzz ${this.raw
      .buzzwords}`
  }
}

const ALLOWED_BUZZ_WORDS = ['amazing', 'hilarious', 'sad', 'bad']

function areBuzzWordsValid(buzzWords) {
  return buzzWords.every(word => ALLOWED_BUZZ_WORDS.some(w => w === word))
}
