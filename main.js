const review = {
  title: 'The return of Jedi',
  rate: 5,
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

console.log(String(review))
console.log(review.toString.call({ title: 'XxX', rate: 2 }))
