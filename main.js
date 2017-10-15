'use strict'

var rateForm = document.getElementById('rateForm')

rateForm.addEventListener('submit', function(event) {
  event.preventDefault()

  var rate = Number(rateForm.rate.value)

  if (Number.isInteger(rate) && rate >= 1 && rate <= 5) {
    alert('OK')
  } else {
    alert('NOK')
  }

  var movie = rateForm.movie.value

  if (movie.startsWith('007')) {
    new Audio(
      'http://mobile.twilight3g.com/mp3tones/rtones/new/tv-movie/preview/bond_007_original-4821.mp3',
    ).play()
  }

  if (movie.toLowerCase().includes('dark')) {
    document.body.style.backgroundColor = 'black'
  }
})
