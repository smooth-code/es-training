/* eslint-disable no-console */
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

const reviews = [
  new Review({ title: 'The Phantom Menace', rate: 5 }),
  new Review({ title: 'Attack of the Clones', rate: 3 }),
  new Review({ title: 'Revenge of the Sith', rate: 4 }),
  new Review({ title: 'A new Hope', rate: 4 }),
  new Review({ title: 'The empire Strikes Back', rate: 3 }),
  new Review({ title: 'The return of the Jedi', rate: 5 }),
  new Review({ title: 'The Force Awakens', rate: 5 }),
  new Review({ title: 'The Last Jedi', rate: 4 }),
]

const showMovies = (reviews, options) =>
  console.log(
    reviews
      .filter(review => review.rate === options.rate)
      .map(review => review.title)
      .join(', '),
  )

console.log('Movies rated 5:')
showMovies(reviews, { rate: 5 })

console.log('Movies rated 3:')
showMovies(reviews, { rate: 3 })
