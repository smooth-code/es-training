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

const sanitizeMovieTitle = title => title.replace(/ /g, '').toLowerCase()

ReviewList.prototype = new Proxy(ReviewList.prototype, {
  get(target, propKey, receiver) {
    if (!propKey || !propKey.match) return Reflect.get.apply(null, arguments)

    const matches = propKey.match(/^get(.+)BuzzWords$/)

    if (!matches) return Reflect.get.apply(null, arguments)

    let [, movie] = matches
    return () =>
      receiver.reviews
        .filter(
          review =>
            sanitizeMovieTitle(review.raw.movie) === sanitizeMovieTitle(movie),
        )
        .reduce((words, review) => [...words, ...review.getBuzzWords()], [])
  },
})

export default ReviewList
