class ReviewList {
  static MOVIE_ALREADY_EXIST = Symbol('already-exist')
  reviews = []

  validate(review) {
    if (this.reviews.some(({ raw: { movie } }) => movie === review.raw.movie)) {
      return this.constructor.MOVIE_ALREADY_EXIST
    }

    return null
  }

  add(review) {
    const invalidReason = review.validate() || this.validate(review)

    if (invalidReason) return invalidReason

    this.reviews.push(review)
    return null
  }

  getBuzzWords() {
    return new Set(
      this.reviews.reduce(
        (buzzwords, review) => [...buzzwords, ...review.getBuzzWords()],
        [],
      ),
    )
  }

  *[Symbol.iterator]() {
    yield* this.reviews
  }
}

export default ReviewList
