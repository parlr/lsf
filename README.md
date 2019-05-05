## LSF [![Build Status](https://travis-ci.org/parlr/lsf.svg?branch=master)](https://travis-ci.org/parlr/lsf)

> Apprendre le vocabulaire LSF (Langue des Signes Française)
>
> Vocabulaire de **1000+ signes** (~600 de bases, ~400 avancés).

### Fonctionnalités

<div align=center>
<img src="src/assets/preview.jpg" alt="aperçu de l'interface de Parlr/LSF">
</div>

- [x] Rechercher un signe ;
- [x] Découvrir un signe ;
- [x] Ralentir la vidéo (`0.5x`) ;
- [ ] Revoir les 10 derniers signes ;

### Source de données

- [Termes de spécialité en LSF](http://lsf.education.fr/index.php?page=recherche_alphabetique) par l'Éducation Nationale ;
- Apprendre 300 mots du quotidien en LSF [partie 1](https://www.youtube.com/watch?v=rz3jw0_XXoc) et [partie 2](https://www.youtube.com/watch?v=DbTKAbY-i0A) par L. Jauvert (en [CC-BY](https://creativecommons.org/licenses/by/3.0/legalcode)) ;
- 100 vidéos d'[Elix](http://elix-lsf.fr/) versées [sur Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Files_supported_by_Wikimedia_France_-_Elix) (en [CC-BY-SA](https://creativecommons.org/licenses/by-sa/4.0/deed.fr))

### How-to

#### Develop

    yarn dev  # on localhost:3000

#### Test

    yarn dev &
    yarn test:unit
    yarn test:e2e

#### Release

    ./release.bash ver.si.on

### License: [MIT](src/assets/LICENSE)
