function isValidRate(rate) {
  const rateNumber = Number(rate)
  return Number.isInteger(rateNumber) && rateNumber >= 1 && rateNumber <= 5
}

export default class Review {
  static RATE_REQUIRED = Symbol('rate-required')
  static INVALID_RATE = Symbol('invalid-rate')

  constructor(raw) {
    this.raw = raw
  }

  validate() {
    if (!this.raw.rate) {
      return this.constructor.RATE_REQUIRED
    }

    if (!isValidRate(this.raw.rate)) {
      return this.constructor.INVALID_RATE
    }

    return null
  }
}
