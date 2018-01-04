# Exercice 10 - Prettier

## Instructions

Pour développer plus vite, nous allons installer Prettier dans notre projet.

* Installer le plugin Prettier dans votre éditeur
* Installer `prettier` dans le projet
* Créer un fichier `.prettierrc` avec la configuration souhaitée
* Créer un fichier `.prettierignore` afin d'ignorer "lib"
* Ajouter un script npm "format"
* Lancer `npm run format`

**Résultat attendu**

```
$ npm run format
> es-training-exercises@1.0.0 format
> prettier --write "**/*.js"

main.js 63ms
webpack.config.js 3ms
```

## Aide

### Exemple de fichier `.prettierrc`

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "semi": false
}
```

### Exemple de script "format"

```json
{
  "name": "my-package",
  "scripts": {
    "format": "prettier --write \"**/*.js\""
  }
}
```
