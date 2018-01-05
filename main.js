function showReview(review) {
  let qualifier
  if (typeof review.rate !== 'number') {
    qualifier = 'invalid note'
  } else if (review.rate === 5) {
    qualifier = 'amazing'
  } else if (review.rate <= 4 && review.rate >= 3) {
    qualifier = 'good'
  } else {
    qualifier = 'bad'
  }

  return console.log(review.title + ' - ' + qualifier)
}

const title = 'The return of Jedi'
const rate = 5

showReview({ title, rate })
