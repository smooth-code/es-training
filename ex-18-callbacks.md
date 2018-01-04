# Exercice 18 - Callbacks

## Instructions

Lorsqu'une revue est valide, nous souhaitons faire en sorte que le message disparaisse au bout de deux secondes.

**Résultat attendu**

```
--> Je poste une nouvelle review
--> Le message d'alerte s'affiche
--> 2 secondes s'écoulent
--> Le message d'alerte disparaît
```

## Aide

```js
// Cacher un élément DOM
element.style.display = 'none'

// Délayer l'exécution d'une fonction
setTimeout(() => {
  console.log('Hello')
}, 1000) // Une seconde plus tard... 'Hello'
```
