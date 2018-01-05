import { toDomElement } from './domUtils'

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

const BLACKLIST = ['shit']
export function getInvalidKeyWords(...keywords) {
  return keywords.filter(keyword => BLACKLIST.includes(keyword))
}

export default Review
