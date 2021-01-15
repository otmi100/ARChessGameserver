FROM node:15-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# RUN npm ci --only=production

# Copy all other source code to work directory
ADD . /usr/src/app
# TypeScript
RUN npm run build


CMD [ "npm", "start" ]
EXPOSE 5000