FROM node:17-alpine3.14

RUN npm install -g @angular/cli
RUN ng new my-app

CMD [ "cd my-app/ && ng serve --open" ]