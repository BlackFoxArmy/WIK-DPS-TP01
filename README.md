# **TP WIK-DPS-TP01**

## Etape du projet :

**Comment lancer le projet :**

Cloner le dossier github : https://github.com/BlackFoxArmy/WIK-DPS-TP01

Executer ce dossier dans Visual Studio Code:
N'oublier pas d'installer tous les packets nécessaire pour le projet :
```
* npm install typescript --save-dev
* npm install @types/node --save-dev
```
Ensuite pour executer le code faites :
```
* cd src
* npx tsc
* node index.js
```
Dans l'URL de recherche taper:
```
localhost:8080
```

1. Réponse en voulant accéder à la page ping :
```
localhost:8080/ping
```

> Une fois sur cette page vous aurez accès au HEADER qui vous montrera la réponse et tout les informations nécessaire, si vous allez voir dans la page réseau, vous pourrez voir le content-lenght qui sera à **795** et en status code **200**.

--------------------------------------

   2.Réponse en voulant accéder à une page non existante:
```
localhost:8080/test
```
    
> Une fois sur cette page vous aurez une erreur 404 si vous allez regarder dans le réseau vous pourrez constater que le status code est en 404 Not Found et que le Content-Length est à 0.


