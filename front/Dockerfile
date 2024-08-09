# Utilisez une image officielle d'Angular pour construire l'application
FROM node:16 as build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste des fichiers de l'application
COPY . .

# Construire l'application Angular
RUN npm run build -- --output-path=dist || cat /tmp/ng-*.log

FROM nginx:latest as production

# Copier les fichiers construits dans le répertoire de NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer NGINX
CMD ["nginx", "-g", "daemon off;"]
