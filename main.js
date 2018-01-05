function showReview(title, rate) {
  let qualifier
  if (rate === 5) {
    qualifier = 'amazing'
  } else if (rate <= 4 && rate >= 3) {
    qualifier = 'good'
  } else {
    qualifier = 'bad'
  }

  return console.log(title + ' - ' + qualifier)
}

showReview('The return of Jedi', 5)
showReview('XxX', 2)
showReview('Coco', 4)
