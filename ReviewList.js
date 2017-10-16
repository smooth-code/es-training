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

  [Symbol.iterator]() {
    let i = 0
    let reviews = this.reviews

    return {
      [Symbol.iterator]() {
        return this
      },
      next() {
        return i < reviews.length ? { value: reviews[i++] } : { done: true }
      },
    }
  }
}

export default ReviewList
