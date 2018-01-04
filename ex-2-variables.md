# Exercice 2 : Variables

## Instructions

Nous souhaitons créer une application permettant de noter des films. Une revue sera composée du titre du film et d'une note allant de 1 à 5.

Pour cela nous allons créer une fonction `showReview(title, rate)` qui affichera la revue dans la console.

On affichera le titre du film et une expression selon la note :

* `rate == 5` : "amazing"
* `rate >= 3 && rate <= 4` : "good"
* `rate <= 2` : "bad"

Compléter le code suivant :

```js
function showReview(title, rate) {
  /* TODO */
}

showReview('The return of Jedi', 5)
showReview('XxX', 2)
showReview('Coco', 4)
```

**Résultat attendu**

```
$ node main.js
The return of Jedi - amazing
XxX - bad
Coco - good
```
