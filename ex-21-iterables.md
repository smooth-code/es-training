# Exercice 21 - Itérables

## Instructions

Nous souhaitons stocker nos revues dans une liste pour pouvoir les afficher plus tard.

* Créer une classe `Reviews` avec les caractéristiques suivantes :
  * Une méthode `add(review)`
  * Implémenter le symbole `Symbol.iterator`
* Créer une instance de la classe `const reviews = new Reviews()`
* Créer une méthode `renderReviews()` qui permettra d'afficher toutes les revues
* Désactiver des règles ESLint si nécessaire

**Résultat attendu**

```
--> J'ajoute une revue
--> La revue est ajoutée à ma liste
--> J'appelle la méthode `renderReviews()` pour afficher la revue
```

## Aide

## Exemple d'utilisation de la classe

```js
// Création de la liste de revue
const reviews = new Reviews()

// Ajout d'une revue
const review = new Review({ title: 'The return of Jedi', rate: 5 })
reviews.add(review)

// Liste de toutes les revues
for (const rev of reviews) {
  console.log(String(rev))
}
```
