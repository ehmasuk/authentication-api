FROM node:23

WORKDIR /app

# copy only package json first
COPY package*.json ./

# install only dependencies
RUN npm install

# now copy your source code
COPY . .

# build your TS code
RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]
