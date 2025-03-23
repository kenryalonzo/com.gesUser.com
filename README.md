# 🚀 Nom du Projet

Une application web moderne et sécurisée pour la gestion des utilisateurs, développée avec **Node.js, Express, TypeScript, Vite, Vanilla TS et Tailwind CSS**.  
Elle utilise **Docker** pour la base de données et intègre un **CI/CD avec GitHub Actions** pour le déploiement automatisé.

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/votre-repo/deploy.yml?branch=main)  
![Docker](https://img.shields.io/badge/Docker-Compose-blue)  
![Node.js](https://img.shields.io/badge/Node.js-TypeScript-green)  

---

## 📌 Table des Matières  
- [✨ Fonctionnalités](#-fonctionnalités)  
- [📂 Architecture du projet](#-architecture-du-projet)  
- [🔧 Technologies utilisées](#-technologies-utilisées)  
- [🚀 Installation & Lancement](#-installation--lancement)  
- [🐳 Utilisation de Docker](#-utilisation-de-docker)  
- [🔄 CI/CD avec GitHub Actions](#-cicd-avec-github-actions)  
- [🌍 Déploiement sur un serveur distant](#-déploiement-sur-un-serveur-distant)  
- [🔗 API Endpoints](#-api-endpoints)  
- [⚙️ Configuration des Variables d’Environnement](#️-configuration-des-variables-denvironnement)  
- [📜 Licence](#-licence)  

---

## ✨ Fonctionnalités  
✅ **Authentification sécurisée** avec bcrypt et gestion des rôles (Admin, Client)  
✅ **Gestion des utilisateurs** (CRUD : Ajouter, Modifier, Supprimer, Activer/Désactiver)  
✅ **Frontend moderne et responsive** avec Vite + Tailwind CSS  
✅ **Base de données MySQL** gérée via **Docker**  
✅ **CI/CD avec GitHub Actions** pour automatiser tests & déploiements  

---

## 📂 Architecture du projet  

### 🔧 Technologies utilisées  

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

## Configuration

### Prérequis

- [Node.js](https://nodejs.org/) (version 22 ou +)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) et [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

## 🚀 Installation & Lancement  

### 1️⃣ **Cloner le dépôt**
   ```bash
   https://github.com/kenryalonzo/com.gesUser.com.git
