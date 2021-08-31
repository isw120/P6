Développez une interface utilisateur pour une application web Python :

Développer un site Web qui permettra aux abonnés de visionner des films intéressants en temps réel.

Ce site utilise l'API locale OCMovies, cette API doit être lancée en local pour que le site fonctionne



Installation et exécution de l'application sans pipenv (avec venv et pip) :

1 - Cloner le dépôt de l'api à l'aide de la commande $ git clone clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git (vous pouvez également télécharger le code en temps qu'archive zip)

2 - Rendez-vous depuis un terminal à la racine du répertoire OCMovies-API-EN-FR-master avec la commande $ cd OCMovies-API-EN-FR-master

3 - Créer un environnement virtuel pour le projet avec $ python -m venv env sous windows ou $ python3 -m venv env sous macos ou linux.

4 - Activez l'environnement virtuel avec $ env\Scripts\activate sous windows ou $ source env/bin/activate sous macos ou linux.

5 - Installez les dépendances du projet avec la commande $ pip install -r requirements.txt

6 - Créer et alimenter la base de données avec la commande $ python manage.py create_db

7 - Démarrer le serveur avec $ python manage.py runserver

8 - Cloner le dépôt du projet à l'aide de la commande $ git clone clone https://github.com/isw120/P6 (vous pouvez également télécharger le code en temps qu'archive zip)

9 - Après l'étape 8 de la procédure, l'API OCMovies peut être interrogée à partir de ce point d'entrée principal : http://localhost:8000/api/v1/titles en ouvrant le fichier index.html