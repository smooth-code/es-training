# Exercice 5 : Fonctions

## Instructions

Notre méthode `showReview()` accepte actuellement un paramètre `review`. Nous souhaitons refactorer le code afin que cette méthode soit accessible directement sur l'objet. Pour plus de flexbilité, nous renommerons la fonction en `toString`.

Au lieu de `showReview(review)` nous souhaitons pouvoir appeler `console.log(String(review))`.

En vous aidant de l'exercice précédent, compléter le code suivant :

```js
const review = {
  title: 'The return of Jedi',
  rate: 5,
  toString() {
    /* TODO */
  },
}

console.log(review.toString())
console.log(review.toString.call({ title: 'XxX', rate: 2 }))
```

**Résultat attendu**

```
$ node main.js
The return of Jedi - amazing
XxX - bad
```

## Aide

### Méthode sur les objets

```js
const obj = {
  name: 'Greg',
  toString() {
    return 'My name is ' + this.name
  },
}

// `toString` est appelé lorsqu'un objet est casté en "string"
console.log(String(obj)) // My name is Greg
```
