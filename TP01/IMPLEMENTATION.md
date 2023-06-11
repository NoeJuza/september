# September - Implémentation

## Introduction

Ce document sers, comme demandé dans les critères du TP02 à préciser les User Stories et leur solution implémentée, justifier les différences avec la maquette initialle et la présence.
La version "en ligne" de cette implémentation de maquette en vue devrait être accessible sur [le déployement suivant](https://september-noejuza.vercel.app/https:/)

## User stories implémentées

(fait ou pas) User story - Solution implémentée

* [X] En tant que qu’étudiant.e, je veux insérer mes tâches afin de pouvoir les organiser - Bouton "Ajouter tâche"
* [X] En tant que qu’étudiant.e, je veux modifier/supprimer mes tâches afin de pouvoir les tenir à jour - Édition de tâche quand on  clique dessus + bouton de suppression lorsque on survole une tâche
* [X] En tant que qu’étudiant.e, je veux classer mes tâche afin de pouvoir distinguer les tâches à haute valeur des autres, comme les tâches répétitives ou à déléguer - Types de tâches "Personelles, Récurentes, A défléguer" et Priorités "Urgente, Moyenne, Faible"
* [X] En tant que qu’étudiant.e, je veux visualiser la progression individuelle de mes tâches afin de pourvoir en connaître l’avancement - Vue Kanban avec progression "Todo-Doing-Done" et drag&drop pour changer d'état
* [X] En tant que qu’étudiant.e, je veux insérer des états à mes tâches afin de pouvoir les réagender si nécessaire - (idem qu'en dessus)
* [X] En tant que qu’étudiant.e, je veux insérer des notifications à mes tâches afin d’être averti en cas de rapprochement d’un délai ou rendu important - Clochette de notification et selection du délai de notification
* [X] En tant que qu’étudiant.e, je veux insérer des mots clés à mes tâches afin de pouvoir trier si nécessaire. - Séparation par "Workspace" (Groupe de tâches regroupés selon la volonté de l'utilisateur)

## Différences avec la maquette figma

La différence majeure (et la seule) avec la maquette figma est la présence du bouton "Supprimer" représenté par une corbeille lorsqu'on survolle une tâche.

En effet, nous n'avons initiallement (dans la maquette) pas prévu de manière de supprimer de tâche par une action de l'utilisateur, après avoir expliqueé cela à l'enseignante, celle-ci nous a indiqué qu'il fallait que les tâches puissent être gérées de manière "CRUD" (create, read, update, delete). Nous avons donc ajouté cette feature de bouton de suppression lors du survol.

Pour supprimer les tâches sur mobile nous avons aussi ajouté une "contextual-menu-action" qui fait apparaître une popup pour supprimer lorsqu'on maintiens le doigt appuyé sur la tâche sur mobile, respectivement avec un clic droit sur PC.

## Justification des règles CSS supplémentaires présentes

### App - Règles custom générales

le App.vue contient certaines règles CSS custom s'applicant à plusieurs éléments de notre application

La classe "drop-shadow" permets donner l'effet de "drop-shadow" sous les "titres" des colonnes du kanban pour les faire ressortir.

La classe "clickable" permets d'afficher la petite main pour indiquer à l'utilisateur qu'il peut cliquer sur le composant

### Composant AddWorkspace (Fromulaire d'ajout de workspace)

Ce composant contient quelques règles CSS spécifiques nécessaire au bon affichage du composant, nottament Pour les composants v-color-picker afin qu'il prenne toute la largeur du formulaire au lieu de "juste" 300px forcés comme le comportement par défaut de vuetify.

Ce composant définit aussi une hauteur maximale pour le composant custom "IconPicker" car celui-ci en a besoin pour réaliser correctement le chargement sur le scroll

### Composant AppBar

Vuetify n'implémentant pas de classes helper pour la "max-width" nous avons du en définir pour notre affichage qui en avait besoin pour flexer correctement.

### Composant PopupComp

Ce composant avait besoin d'un certain nombre de descriptions CSS spécifiques qui n'ont pas de classe helper dans vuetify, nous avons donc créé des classes spécifiques afin de réaliser ces affichages.

Constatation rigolote: lorsqu'on donne la classe helper "d-flex" à une balise avec vuetify, celui-ci applique la règle "display: flex !important;" Ce qui est une mauvaise pratique CSS, de plus cela nous avait posé problème lorsqu'on a essayé de tester le composant car à cause du "!important" le "v-show" était ignoré. La solution à ce problème a été de déplacer la logique dans une classe en définissant la règle "display: flex;" sans le !important.

### Composant Task

Pour afficher la poubelle lors du survol et son afichage "par dessus" le reste nous avons du définir un comportement css personalisé car aucune classe helper de vuetify nous permettait de réaliser la fonctionalité que nous essayions de réaliser

### Composant Workspace

Pour afficher le workspace actuellement sélectionné de manière différente des autres nous avons créé une classe "selected" qui permets d'afficher le titre du workspace en gras et sous-ligné

### Vue SeptemberView

Dans cette vue, on définit la hauteur à la hauteur complète du viewport (100vh), ce qui n'est pas possible avec les classes helper de vuetify. On définit aussi la taille de la tasklist afin qu'elle prenne la taille restante sur la page et qu'elle puisse se scroller correctement sur PC comme Mobile.
