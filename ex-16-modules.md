# Exercice 16 - Modules

## Instructions

Le code du projet commence à devenir conséquent, nous allons le réorganiser en séparant le code en petits modules.

* Créer un module `domUtils.js` qui exportera `toDomElement` et `appendObjectToContainer`
* Créer un module `Review.js` qui exportera `Review` en "default export" et `getInvalidKeyWords` en "named export"
* Ajouter les imports nécessaires au bon fonctionnement du projet

**Résultat attendu**

Le projet doit fonctionner comme auparavant.

## Aide

### Import / Export

```js
function MyClass() {}

// Export nommé
export const CONSTANT = 'constant'

// Export par défaut
export default MyClass
```

```js
// Import par défaut (MyClass) et nommé (CONSTANT)
import MyClass, { CONSTANT } from './MyClass'
```
