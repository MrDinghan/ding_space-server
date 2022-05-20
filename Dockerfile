 FROM node:16

 ADD ./dist /app/
 COPY package.json /app/
 COPY ./node_modules /app/node_modules
 WORKDIR /app

 EXPOSE 3000
 CMD ["npm", "run", "start:prod"]