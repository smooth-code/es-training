class Reviews {
  constructor() {
    this.reviews = []
  }

  add(review) {
    this.reviews.push(review)
  }

  *[Symbol.iterator]() {
    yield* this.reviews
  }
}

export default Reviews
