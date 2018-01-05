/* eslint-disable no-console */

const toDomElement = Symbol('toDomElement')
function appendObjectToContainer(object, container) {
  const element = object[toDomElement]()
  container.appendChild(element)
}

const BLACKLIST = ['shit']
function getInvalidKeyWords(...keywords) {
  return keywords.filter(keyword => BLACKLIST.includes(keyword))
}

function Review({ title, rate, keywords = [] }) {
  this.title = title
  this.rate = rate
  this.keywords = keywords
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

    return `${this.title} - ${qualifier} [${this.keywords.join(', ')}]`
  },

  [toDomElement]() {
    const div = document.createElement('div')
    div.innerHTML = String(this)
    return div
  },
}

const rateForm = document.querySelector('#rateForm')
const reviews = document.querySelector('#reviews')
const alert = document.querySelector('.alert')

rateForm.addEventListener('submit', event => {
  event.preventDefault()
  const rate = Number(rateForm.rate.value)
  const title = rateForm.title.value
  const keywords = rateForm.keywords.value.split(',').map(k => k.trim())
  const invalidKeyWords = getInvalidKeyWords(...keywords)
  const isValid = invalidKeyWords.length === 0
  alert.style.display = 'block'
  alert.classList.toggle('alert-danger', !isValid)
  alert.classList.toggle('alert-success', isValid)
  alert.innerHTML = isValid
    ? 'Review added'
    : `Invalid keywords: ${invalidKeyWords.join(', ')}`

  if (isValid) {
    const review = new Review({ rate, title, keywords })
    appendObjectToContainer(review, reviews)
  }
})
