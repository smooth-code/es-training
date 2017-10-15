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
})
