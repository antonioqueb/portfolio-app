# Dockerfile para la aplicación React

FROM node:16-alpine

# Crea un directorio para la aplicación
WORKDIR /app

# Copia los archivos de la aplicación
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY ./ ./

# Construye la aplicación
RUN npm run build

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "serve"]
