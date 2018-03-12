# Exercice 15 - Spread operator

## Instructions

Nous souhaitons valider les mots clefs afin de vérifier qu'ils ne font pas partie d'une blacklist.

* Ajouter et compléter la méthode `getInvalidKeyWords()`, elle retournera un tableau contenant les mots clefs invalides

```js
const BLACKLIST = ['shit']
function getInvalidKeyWords(...keywords) {
  /* TODO */
}
```

* Ajouter le code suivant dans votre `index.html` à l'endroit ou l'alerte s'affichera

```html
<div class="alert" style="display: none"></div>
```

* Lorsque le mot clef est invalide passer l'alerte en rouge en y ajoutant la classe `alert-danger` et afficher une erreur `Invalid keywords: shit`
* Lorsque tout est valide afficher l'alerte en verte en y ajoutant la classe `alert-success` et afficher un message `Review added`

**Résultat attendu**

```
--> Je tape "The return of Jedi", la note "5" et les mots clefs "dark, shit"
--> Je vois s'afficher un message rouge avec "Invalid keywords: shit"

--> Je tape "The return of Jedi", la note "5" et les mots clefs "dark"
--> Je vois s'afficher un message vert avec "Review added"
```

## Aide

### Manipulation du DOM

```js
const alert = document.querySelector('.alert')
// Affiche l'alerte
alert.style.display = 'block'

// Ajoute la classe 'alert-danger'
alert.classList.toggle('alert-danger', true)

// Supprime la classe 'alert-danger'
alert.classList.toggle('alert-danger', false)

// Change le contenu de l'élément HTML
alert.innerHTML = 'Oups erreur!'
```
