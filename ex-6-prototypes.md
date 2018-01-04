# Exercice 6 : Prototypes

## Instructions

Nous souhaitons pouvoir créer une revue avec `new Review()`.

En vous aidant de l'exercice précédent, compléter le code suivant :

```js
function Review(review) {
  /* TODO */
}

Review.prototype = {
  /* TODO */
}

const theReturnOfJediReview = new Review({
  title: 'The return of Jedi',
  rate: 5,
})

const cocoReview = new Review({
  title: 'Coco',
  rate: 4,
})

console.log(String(theReturnOfJediReview))
console.log(String(cocoReview))
```

**Résultat attendu**

```
$ node main.js
The return of Jedi - amazing
Coco - good
```
