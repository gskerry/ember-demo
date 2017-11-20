FROM 4db2697ce114

WORKDIR /home/myapp

RUN yarn global add ember-cli

EXPOSE 4200

CMD [ "echo", "Welcome to Ember." ]
