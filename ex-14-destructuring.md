# Exercice 14 - Déstructuration

## Instructions

Nous souhaitons pouvoir ajouter des mots clefs à nos reviews.

* Modifier le constructeur de `Review` afin d'accepter une option `keywords`, sa valeur par défaut sera un tableau vide
* Modifier la méthode `toString` pour afficher le titre, l'adjectif et tous les mots clefs séparés par une virgule
* Ajouter un champs `keywords` dans le fichier `index.html`

**Résultat attendu**

```
--> Je tape "The return of Jedi", la note "5" et les mots clefs "dark, amazing, star wars"
--> Je vois s'afficher dans la page "The return of Jedi - amazing - [dark, amazing, star wars]"
```

## Aide

### Déstructurer avec valeur par défaut

```js
function addCoords({ x = 0, y = 0 }) {
  return x + y
}
console.log(addCoords()) // 0
```

### Array => String | String => Array

```js
const array = ['a', 'b', 'c']
console.log(array.join('|')) // 'a|b|c'

const list = 'a, b, c'
console.log(list.split(',').map(s => s.trim())) // ['a', 'b', 'c']
```
