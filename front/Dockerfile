# Utilisez une image officielle d'Angular pour construire l'application
FROM node:16 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src ./src
COPY public ./public

RUN npm run build -- --output-path=dist || cat /tmp/ng-*.log

FROM nginx:1.21.6-alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Démarrer NGINX
CMD ["nginx", "-g", "daemon off;"]
