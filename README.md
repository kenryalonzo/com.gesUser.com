# Nom du Projet

Une application web moderne conçue pour la gestion des utilisateurs et la sécurisation des interactions entre administrateurs et clients. Ce projet est structuré en deux parties distinctes – un backend en Node/Express avec TypeScript et un frontend en Vite utilisant vanilla TypeScript et Tailwind CSS – et intègre Docker pour la gestion de la base de données.

---

## Table des Matières

- [Présentation du projet](#présentation-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Architecture](#architecture)
- [Technologies utilisées](#technologies-utilisées)
- [Installation et configuration](#installation-et-configuration)
  - [Prérequis](#prérequis)
  - [Installation du Backend](#installation-du-backend)
  - [Installation du Frontend](#installation-du-frontend)
  - [Utilisation de Docker](#utilisation-de-docker)
- [Lancement du projet](#lancement-du-projet)
- [Structure du projet](#structure-du-projet)
- [Documentation et Contribuer](#documentation-et-contribuer)
- [Licence](#licence)

---

## Présentation du projet

Ce projet vise à développer une application web sécurisée pour la gestion centralisée des utilisateurs d'une entreprise. L’objectif est de fournir une plateforme robuste, évolutive et facile à maintenir, en adoptant une architecture claire et des technologies modernes. Le backend expose une API REST sécurisée, tandis que le frontend offre une interface utilisateur intuitive et réactive.

---

## Fonctionnalités

- **Authentification sécurisée**  
  - Système d’inscription et de connexion avec hashage des mots de passe (bcrypt)
  - Gestion des sessions et contrôle d'accès basé sur les rôles

- **Gestion des utilisateurs**  
  - Création, modification, suppression et activation/désactivation des comptes utilisateurs
  - Tableau de bord pour les administrateurs pour consulter et gérer les utilisateurs

- **Interface utilisateur**  
  - Application frontend moderne avec Vite, vanilla TypeScript et Tailwind CSS
  - Design responsive et expérience utilisateur fluide

- **Containerisation**  
  - Utilisation de Docker pour gérer la base de données (ex. MySQL)
  
---

## Architecture

Le projet est divisé en deux parties :

- **Backend**  
  - **Technologies** : Node.js, Express, TypeScript  
  - **Structure** : Organisation en contrôleurs, modèles, routes et middlewares pour une architecture de type MVC adaptée aux environnements Node.

- **Frontend**  
  - **Technologies** : Vite, vanilla TypeScript, Tailwind CSS  
  - **Fonction** : Consommation de l’API REST du backend et affichage d’une interface utilisateur moderne.

- **Docker**  
  - Utilisé pour orchestrer la base de données et, éventuellement, containeriser d’autres services.

---

## Technologies utilisées

- **Backend**  
  - Node.js, Express, TypeScript  
  - ESLint pour garantir la qualité du code  
  - Bcrypt pour le hashage des mots de passe  

- **Frontend**  
  - Vite, vanilla TypeScript  
  - Tailwind CSS pour la mise en forme et le design

- **Base de données**  
  - MySQL (ou autre SGBD) géré via Docker

- **Outils de collaboration**  
  - Git pour le versioning
  - Docker Compose pour l’orchestration des services

---

## Installation et configuration

### Prérequis

- [Node.js](https://nodejs.org/) (version 22 ou +)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) et [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

### Installation du Backend

1. **Cloner le dépôt et accéder au dossier backend**  
   ```bash
   https://github.com/kenryalonzo/com.gesUser.com.git
