# Exercice 20 - Async / await

## Instructions

Nous souhaitons rendre notre application un peu plus funky et faire clignoter notre header.

* Installer `babel-polyfill`
* Importer `babel-polyfill` dans `main.js`
* Créer une méthode asynchrone `showHeader()` qui affichera le header et le fera clignoter 3 fois avec 100ms d'interval

**Résultat attendu**

```
--> J'arrive sur la page
--> Le header s'affiche et clignote 3 fois
```

## Aide

```js
async function myMethod() {
  // J'attend 400ms
  await delay(400)
  // J'affiche 'Hello'
  console.log('Hello')
  // J'attend 400ms
  await delay(400)
  // J'affiche 'World'
  console.log('World')
}

myMethod()
```
