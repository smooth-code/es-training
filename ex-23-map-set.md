# Exercice 23 - Map et Set

## Instructions

Nous souhaitons nous assurer que les keywords soient uniques.

* Utiliser un `Set` pour stocker les mots clefs

**Résultat attendu**

```
--> J'ajoute une revue avec deux mots clefs similaires
--> Le mot clef n'apparaît qu'une seule fois
```

---

Pour un debug plus facile, nous souhaitons pouvoir récupérer l'élément HTML correspondant à un objet JavaScript. Nous souhaitons laisser ce code disponible en production et éviter les fuites mémoires.

* Dans `domUtils.js`, exposer une structure `objectByElement` dans `window` qui permettra de récupérer l'objet JavaScript associé à un élément HTML

**Résultat attendu**

Dans la console du navigateur :

```js
objectByElement.get($('#reviews > div'))
// Output:
// Review {title: "aa", rate: 1, keywords: Set(1)}
```

## Aide

### Set / WeakSet

```js
const array = []

// Création d'un Set à partir d'un tableau
const set = new Set(array)

// Création d'un tableau à partir d'un Set
const arrayFromSet = [...set]
```

### Map / WeakMap

```js
// Créer une Map
const map = new Map()

// Associer une clef et une valeur
map.set('x', 20)

// Récupérer une valeur à partir de la clef
console.log(map.get(x)) // 20
```
