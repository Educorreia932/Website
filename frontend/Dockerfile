FROM node:lts-alpine

WORKDIR /

EXPOSE 8080

# Copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy project files and folders to the current working directory
COPY . .

# Build app for production with minification
RUN npm run build --modern --no-unsafe-inline
