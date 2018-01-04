# Exercice 17 - Classes

## Instructions

Nous souhaitons rendre notre code plus moderne et utiliser des classes.

* Convertir `Review` en classe

**Résultat attendu**

Le projet doit fonctionner comme auparavant.

## Aide

### Classes

```js
class Car {
  constructor({ color }) {
    this.color = color
  }

  getColor() {
    return this.color
  }
}

const car = new Car({ color: 'red' })
console.log(car.getColor()) // 'red'
```
