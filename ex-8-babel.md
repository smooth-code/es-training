# Exercice 8 - Babel

## Instructions

Nous souhaitons que notre code fonctionne sur Node.js v6.0.0 et sur les deux dernières versions des navigateurs.

* Installer `babel-cli` et `babel-preset-env`
* Créer un fichier `.babelrc` avec la preset "env" configurée pour supporter :

  * Node.js v6+
  * Les deux dernières versions des navigateurs

* Ajouter un fichier `.gitignore` afin d'ignorer "node_modules" et "lib"
* Ajouter un script npm "build" permettant de builder le projet avec Babel
* Lancer `npm run build`

**Résultat attendu**

```
$ npm run build
> es-training-exercises@1.0.0 build
> babel main.js -d lib

main.js -> lib/main.js
```

## Aide

### Installer un package en mode développement

```
$ npm install --save-dev package-name
```

### Exemple de configuration `.babelrc`

```json
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "browsers": ["chrome > 40"],
          "node": "8"
        }
      }
    ]
  ]
}
```

### Exemple de fichier `.gitignore`

```
file_to_ignore
directory_to_ignore/
```

### Exemple de `package.json` contenant un script "build"

```json
{
  "name": "my-package",
  "scripts": {
    "build": "babel main.js -d lib"
  }
}
```
