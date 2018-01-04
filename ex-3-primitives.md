# Exercice 3 : Primitives

## Instructions

Nous souhaitons afficher un message d'erreur si jamais la note renseignée n'est pas de type "number".

En vous aidant de l'exercice précédent, compléter le code suivant :

```js
function showReview(title, rate) {
  /* TODO */
}

showReview('Coco', 4)
showReview('Matrix', '5')
```

**Résultat attendu**

```
$ node main.js
Coco - good
Matrix - invalid note
```

## Aide

### Opérateur typeof

```js
console.log(typeof 5) // 'number'
console.log(typeof 'hello') // 'string'
```
