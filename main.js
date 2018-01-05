/* eslint-disable no-console */

const toDomElement = Symbol('toDomElement')
function appendObjectToContainer(object, container) {
  const element = object[toDomElement]()
  container.appendChild(element)
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

rateForm.addEventListener('submit', event => {
  event.preventDefault()
  const rate = Number(rateForm.rate.value)
  const title = rateForm.title.value
  const keywords = rateForm.keywords.value.split(',').map(k => k.trim())
  const review = new Review({ rate, title, keywords })
  appendObjectToContainer(review, reviews)
})
