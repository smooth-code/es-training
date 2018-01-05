function showReview(title, rate) {
  let qualifier
  if (typeof rate !== 'number') {
    qualifier = 'invalid note'
  } else if (rate === 5) {
    qualifier = 'amazing'
  } else if (rate <= 4 && rate >= 3) {
    qualifier = 'good'
  } else {
    qualifier = 'bad'
  }

  return console.log(title + ' - ' + qualifier)
}

showReview('Coco', 4)
showReview('Matrix', '5')
