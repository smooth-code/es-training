# Exercice 11 - ESLint

## Instructions

Afin de nous aider lors du développement et de détecter les erreurs au plus tôt nous allons ajouter ESLint au projet.

* Installer `eslint`, `babel-eslint`, `eslint-config-airbnb-base`, `eslint-plugin-import`, `eslint-config-prettier`
* Créer un fichier `.eslintrc.js` avec la configuration suviante :

```js
// .eslintrc.js
module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parser: 'babel-eslint',
  env: { browser: true },
}
```

* Créer un fichier `.eslintignore` afin d'ignorer "lib"
* Ajouter un script npm "lint" : `eslint .`
* Lancer la commande `npm run lint`

**Résultat attendu**

```
$ npm run lint
main.js
  19:5   warning  Unexpected console statement                      no-console
  19:17  error    Unexpected string concatenation                   prefer-template
  34:21  error    'reviews' is already declared in the upper scope  no-shadow
  35:3   warning  Unexpected console statement                      no-console
  42:1   warning  Unexpected console statement                      no-console
  45:1   warning  Unexpected console statement                      no-console
```

* Désactiver la règle `no-console` dans `main.js`
* Désactiver la règle `no-shadow` dans tout le projet

**Résultat attendu**

```
$ npm run lint
main.js
  19:17  error    Unexpected string concatenation                   prefer-template
```
