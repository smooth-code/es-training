# Exercice 19 - Promises

## Instructions

Pour plus de flexbilité, nous souhaitons utiliser des Promises dans notre code.

* Créer une fonction `delay(time)` qui retournera une promesse résolue au bout de `time` millisecondes
* Utiliser la fonction `delay` au lieu de la fonction `setTimeout`

Nous souhaitons également afficher un header qui sera chargé depuis un autre fichier `header.html`.

* Ajouter un élement `<header></header>` dans `index.html`
* A l'aide de l'API `fetch`, charger le contenu de `header.html` au chargement de la page

**Résultat attendu**

```
--> J'arrive sur la page
--> Le header s'affiche
```

## Aide

### Charger un fichier html à l'aide de l'API fetch

```js
fetch('/my-file.html')
  .then(res => res.text())
  .then(text => {
    console.log(text) // Content of "my-file.html"
  })
```
