# Utilisez une image officielle d'Angular pour construire l'application
FROM node:16 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/local/app/dist/bobapp /usr/share/nginx/html

RUN npm run build 

FROM nginx:1.21.6-alpine AS production

EXPOSE 80

# Démarrer NGINX
CMD ["nginx", "-g", "daemon off;"]
