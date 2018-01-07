import { toDomElement } from './domUtils'

class Review {
  constructor({ title, rate, keywords = [] }) {
    this.title = title
    this.rate = rate
    this.keywords = new Set(keywords)
  }

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

    return `${this.title} - ${qualifier} [${[...this.keywords].join(', ')}]`
  }

  [toDomElement]() {
    const div = document.createElement('div')
    div.innerHTML = String(this)
    return div
  }
}

Review.prototype = new Proxy(Review.prototype, {
  get(target, propKey, receiver) {
    if (!propKey || !propKey.match) {
      return Reflect.get(target, propKey, receiver)
    }

    const matches = propKey.match(/^has(.+)Keyword/)

    if (!matches) {
      return Reflect.get(target, propKey, receiver)
    }

    const [, matchingKeyword] = matches
    return () =>
      [...receiver.keywords].some(
        keyword => keyword.toLowerCase() === matchingKeyword.toLowerCase(),
      )
  },
})

const BLACKLIST = ['shit']
export function getInvalidKeyWords(...keywords) {
  return keywords.filter(keyword => BLACKLIST.includes(keyword))
}

export default Review
