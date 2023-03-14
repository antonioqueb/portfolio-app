FROM node:16-alpine

RUN npm install -g ts-node

# Crea un directorio para la aplicación
WORKDIR /usr/src/app

# Copia los archivos de la aplicación
COPY package*.json ./

COPY . .


# Instala las dependencias de la aplicación
RUN npm install
