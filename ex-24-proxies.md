# Exercice 24 - Proxies

## Instructions

Nous souhaitons pouvoir tester si une revue possède un mot clef avec une méthode magique.

* A l'aide des proxies, implémenter la méthode magique dans la class `Review`

**Résultat attendu**

```js
const review = new Review({
  title: 'The return of Jedi',
  rate: 5,
  keywords: ['amazing'],
})

console.log(review.hasAmazingKeyword()) // true
console.log(review.hasAMAZINGKeyword()) // true
console.log(review.hasHorrorKeyword()) // false
```

Avec la méthode précédente, il vous est possible de le tester directement dans la console du navigateur :

```js
// Teste si la première review a le keyword "amazing"
objectByElement.get($('#reviews > div')).hasAmazingKeyword()
// true
```
