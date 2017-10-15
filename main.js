'use strict'

const rateForm = document.getElementById('rateForm')

const MOVIE_REQUIRED = Symbol('movie-required')
const RATE_REQUIRED = Symbol('rate-required')
const INVALID_RATE = Symbol('invalid-rate')

function isValid({ movie = null, rate = null } = {}) {
  if (!movie) return MOVIE_REQUIRED
  if (!rate) return RATE_REQUIRED

  const nbRate = Number(rateForm.rate.value)
  if (!Number.isInteger(nbRate) || nbRate < 1 || nbRate > 5) return INVALID_RATE

  return null
}

function setElementStyle(element, styleObj) {
  Object.assign(element.style, styleObj)
}

rateForm.addEventListener('submit', function(event) {
  event.preventDefault()

  const { rate: { value: rate }, movie: { value: movie } } = rateForm

  const alert = rateForm.querySelector('.alert')

  const invalidReason = isValid({ rate, movie })

  function getMessage() {
    switch (invalidReason) {
      case MOVIE_REQUIRED:
        return `Movie required.`
      case RATE_REQUIRED:
        return `Rate required.`
      case INVALID_RATE:
        return `Invalid rate ${rate}.`
    }

    return `The movie ${movie} has been rated ${rate}!`
  }

  setElementStyle(alert, { display: 'block' })
  alert.classList.toggle('alert-danger', invalidReason)
  alert.classList.toggle('alert-success', !invalidReason)
  alert.innerHTML = invalidReason
    ? getMessage(invalidReason)
    : `The movie ${movie} has been rated ${rate}!`

  if (movie.startsWith('007')) {
    new Audio(
      'http://mobile.twilight3g.com/mp3tones/rtones/new/tv-movie/preview/bond_007_original-4821.mp3',
    ).play()
  }

  if (movie.toLowerCase().includes('dark')) {
    setElementStyle(document.body, { backgroundColor: 'black' })
  }
})
