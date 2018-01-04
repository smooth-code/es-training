# Exercice 13 - Symbols

## Instructions

Notre projet fonctionne dans le navigateur, pour être un peu plus user-friendly nous allons permettre à nos utilisateurs d'ajouter des revues via un formulaire.

* Modifier la configuration Webpack pour utiliser un fichier `index.html` :
* Créer un fichier `index.html` avec le code suivant :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
    <style type="text/css">
    .container {
      margin: 20px;
    }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Rate your movie</h2>
      <form id="rateForm">
        <div class="alert" style="display: none"></div>
        <div class="form-group">
          <label for="movie">Movie</label>
          <input class="form-control" type="text" name="movie" id="movie">
        </div>
        <div class="form-group">
          <label for="rate">Rate (1 to 5)</label>
          <input class="form-control" type="text" name="rate" id="rate">
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
      <div id="reviews"></div>
    </div>
  </body>
</html>
```

* Relancer la commande `npm run dev`, le formulaire doit s'afficher
* Modifier notre code pour ajouter une review via le formulaire

  * Écouter l'événement "submit" sur le formulaire
  * Récupérer le titre et la note
  * Créer une instance de "Review" avec ce titre et cette note
  * Appeler la méthode `review.show()`

**Résultat attendu**

```
--> Je tape "The return of Jedi" et la note "5"
--> La console du navigateur affiche "The return of Jedi - amazing"
```

---

Nous souhaitons maintenant afficher la review dans la page. Pour cela nous disposons d'une méthode générique permettant d'ajouter n'importe quel objet dans un container.

```js
const toDomElement = symbol('toDomElement')
function appendObjectToContainer(object, container) {
  const element = object[toDomElement]()
  container.appendChild(element)
}
```

* Implémenter le symbole `toDomElement` sur le prototype de `Review`
* Appeler la fonction `appendObjectToContainer(review, document.querySelector('#reviews'))` lors de l'ajout d'une review

**Resultat attendu**

```
--> Je tape "The return of Jedi" et la note "5"
--> Je vois s'afficher dans la page "The return of Jedi - amazing"
```

## Aide

### Spécifier un template à HtmlWebpackPlugin

```js
new HtmlWebpackPlugin({ template: './index.html ' })
```

### Interagir avec un formulaire HTML

```js
// Récupérer un élément ayant l'ID "my-form"
const form = document.querySelector('#my-form')

// Écouter un événement "submit" sur un élément HTML
form.addEventListener('submit', event => {
  // Empêcher le comportement par défaut du navigateur sur l'événement
  // Sur un submit, cela empêche le rechargement de la page
  event.preventDefault()

  // Récupérer la valeur d'un input ayant l'ID "name"
  const name = form.name.value
})
```

### Caster en JavaScript

```js
// Passer d'une string à un nombre
String(5) // '5'
// Passer d'un nombre à une string
Number('5') // 5
```

### Créer un élément HTML

```js
const div = document.createElement('div')
div.innerHTML = 'Hello!'
```
