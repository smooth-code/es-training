import validate, {
  MOVIE_REQUIRED,
  RATE_REQUIRED,
  INVALID_RATE,
  INVALID_BUZZ_WORDS,
} from './validate'
import { setElementStyle } from './domUtil'

const rateForm = document.getElementById('rateForm')

rateForm.addEventListener('submit', function(event) {
  event.preventDefault()

  const {
    rate: { value: rate },
    movie: { value: movie },
    buzzwords: { value: rawBuzzwords },
  } = rateForm

  const buzzWords = rawBuzzwords.split(',').map(function(word) {
    return word.trim().toLowerCase()
  })
  const alert = rateForm.querySelector('.alert')
  const invalidReason = validate({ rate, movie, buzzWords })

  function getMessage() {
    switch (invalidReason) {
      case MOVIE_REQUIRED:
        return `Movie required.`
      case RATE_REQUIRED:
        return `Rate required.`
      case INVALID_RATE:
        return `Invalid rate ${rate}.`
      case INVALID_BUZZ_WORDS:
        return `Invalid buzz word ${buzzWords.join(', ')}`
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
