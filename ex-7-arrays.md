# Exercice 7 - Tableaux

## Instructions

A partir d'une liste de revues, nous souhaitons pouvoir les filter par note et afficher leurs titres séparés par des virgules.

En vous aidant de l'exercice précédent, compléter le code suivant :

```js
function Review() {
  /* TODO */
}

Review.prototype = {
  /* TODO */
}

const reviews = [
  new Review({ title: 'The Phantom Menace', rate: 5 }),
  new Review({ title: 'Attack of the Clones', rate: 3 }),
  new Review({ title: 'Revenge of the Sith', rate: 4 }),
  new Review({ title: 'A new Hope', rate: 4 }),
  new Review({ title: 'The empire Strikes Back', rate: 3 }),
  new Review({ title: 'The return of the Jedi', rate: 5 }),
  new Review({ title: 'The Force Awakens', rate: 5 }),
  new Review({ title: 'The Last Jedi', rate: 4 }),
]

const showMovies = (reviews, options) => console.log(/* TODO */)

console.log('Movies rated 5:')
showMovies(reviews, { rate: 5 })

console.log('Movies rated 3:')
showMovies(reviews, { rate: 3 })
```

**Résultat attendu**

```
$ node main.js
Movies rated 5:
The Phantom Menace, The return of the Jedi, The Force Awakens
Movies rated 3:
Attack of the Clones, The empire Strikes Back
```
