# Exercice 4 : Objets

## Instructions

Pour plus de flexibilité nous allons matérialiser notre revue sous forme d'un objet.

En vous aidant de l'exercice précédent, compléter le code suivant :

```js
function showReview(review) {
  /* TODO */
}

const title = 'The return of Jedi'
const rate = 5

showReview(/* TODO */)
```

**Résultat attendu**

```
$ node main.js
The return of Jedi - amazing
```

## Aide

### Création d'objet et accès aux propriétés

```js
const foo = 'foo'
const bar = 'bar'

// Création d'un objet avec raccourcis de propriétés
const obj = { foo, bar }

// Accès aux propriétés d'un objet
console.log(obj.foo) // 'foo'
```
