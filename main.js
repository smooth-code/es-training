function Review(review) {
  this.title = review.title
  this.rate = review.rate
}

Review.prototype = {
  toString() {
    let qualifier
    if (typeof this.rate !== 'number') {
      qualifier = 'invalid note'
    } else if (this.rate === 5) {
      qualifier = 'amazing'
    } else if (this.rate <= 4 && this.rate >= 3) {
      qualifier = 'good'
    } else {
      qualifier = 'bad'
    }

    return this.title + ' - ' + qualifier
  },
}

const theReturnOfJediReview = new Review({
  title: 'The return of Jedi',
  rate: 5,
})

const cocoReview = new Review({
  title: 'Coco',
  rate: 4,
})

console.log(String(theReturnOfJediReview))
console.log(String(cocoReview))
