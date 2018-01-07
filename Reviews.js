class Reviews {
  constructor() {
    this.reviews = []
  }

  add(review) {
    this.reviews.push(review)
  }

  [Symbol.iterator]() {
    const { reviews } = this
    let i = 0

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

export default Reviews
