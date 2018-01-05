/* eslint-disable no-console */
import 'babel-polyfill'
import { appendObjectToContainer } from './domUtils'
import Review, { getInvalidKeyWords } from './Review'

const delay = time => new Promise(resolve => setTimeout(resolve, time))

const header = document.querySelector('header')

async function showHeader() {
  const res = await fetch('/header.html')
  const html = await res.text()
  header.innerHTML = html

  await delay(100)
  header.style.opacity = 0
  await delay(100)
  header.style.opacity = 1
  await delay(100)
  header.style.opacity = 0
  await delay(100)
  header.style.opacity = 1
}

showHeader()

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
    delay(2000).then(() => {
      alert.style.display = 'none'
    })
    const review = new Review({ rate, title, keywords })
    appendObjectToContainer(review, reviews)
  }
})
