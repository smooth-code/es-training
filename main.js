import MovieReview from './MovieReview'
import ReviewList from './ReviewList'
import { setElementStyle } from './domUtil'

const reviews = new ReviewList()
const reviewsContainer = document.querySelector('#reviews')

const delay = duration => new Promise(resolve => setTimeout(resolve, duration))

async function loadHeader() {
  const res = await fetch('/header.html')
  const text = await res.text()
  const header = document.querySelector('header')
  header.innerHTML = text
  await delay(2000)
  header.classList.add('bigHeader')
}

loadHeader()

const rateForm = document.getElementById('rateForm')

rateForm.addEventListener('submit', event => {
  event.preventDefault()

  const {
    rate: { value: rate },
    movie: { value: movie },
    buzzwords: { value: buzzwords },
  } = rateForm

  const review = new MovieReview({ rate, movie, buzzwords })

  const alert = rateForm.querySelector('.alert')
  const invalidReason = reviews.add(review)

  function getMessage() {
    switch (invalidReason) {
      case MovieReview.MOVIE_REQUIRED:
        return `Movie required.`
      case MovieReview.RATE_REQUIRED:
        return `Rate required.`
      case MovieReview.INVALID_RATE:
        return `Invalid rate ${rate}.`
      case MovieReview.INVALID_BUZZ_WORDS:
        return `Invalid buzz word ${buzzwords}`
      case MovieReview.MOVIE_ALREADY_EXIST:
        return 'Movie already exists'
    }

    return `The movie ${movie} has been rated ${rate}!`
  }

  setElementStyle(alert, { display: 'block' })

  alert.classList.toggle('alert-danger', invalidReason)
  alert.classList.toggle('alert-success', !invalidReason)
  alert.innerHTML = invalidReason
    ? getMessage(invalidReason)
    : `The movie ${movie} has been rated ${rate}!`

  Array.from(document.querySelectorAll('.form-control')).forEach(formGroup =>
    formGroup.classList[invalidReason ? 'add' : 'remove']('is-invalid'),
  )

  if (!invalidReason) {
    reviewsContainer.innerHTML = ''

    for (let review of reviews) {
      console.log(String(review))
      const reviewDiv = document.createElement('div')
      reviewDiv.innerHTML = String(review)
      reviewsContainer.appendChild(reviewDiv)
    }
  }

  delay(2000).then(() => setElementStyle(alert, { display: 'none' }))

  if (movie.startsWith('007')) {
    new Audio(
      'http://mobile.twilight3g.com/mp3tones/rtones/new/tv-movie/preview/bond_007_original-4821.mp3',
    ).play()
  }

  if (movie.toLowerCase().includes('dark')) {
    setElementStyle(document.body, { backgroundColor: 'black' })
  }
})

// co example
function co(genFunc) {
  const genObj = genFunc()
  const run = previousValue => {
    const { value, done } = genObj.next(previousValue)
    if (!done) run(value)
  }

  run()
}

function sayHello() {
  return 'hello world!'
}

co(function*() {
  console.log(yield sayHello())
})
