# The Chowdr App
#
### The Chowdr App is a full-stack application using the MERN stack: Mongoose, Express, React, Node.js
### Chowder model has full CRUD
### Includes Authorization; sign up / log in functionality with encrypted passwords and authorization flow
#
#### Notion tracker: https://www.notion.so/AAS-Chowder-app-aac2f03553dc47b9918557b0d2015091
#### Frontend is deployed in Netlify: https://serene-hopper-aee9f0.netlify.app/
#### Backend is deployed in Heroku: https://chowdr-app.herokuapp.com/
#

#### There are two separate Git repositories for Frontend and Backend
#### User stories https://www.notion.so/d7eda6f32b0a4d5792087861420f86a3?v=8e171da8795d437fbaf8d6bff397480b
#### Board view: https://www.notion.so/af27c05b5beb4f90a03d7885cd3f7b7d?v=2fef6ed1bc3c469b8e9c9a01ed91dfd4
#### Technologies: React, Javascript, MongoDB/Mongoose, Express, Node.js, scss, Git, Notion
#

#### Construction Logic
##### Two schemas: Chowder and User
##### Two routers: "/chowders" and "/user"
###### "/chowders" contains basic CRUD functionality
###### "/user" contains login/signup/delete routes
###### * logout feature is handled client-side by removing token from user's localstorage on frontend

#### Challenges
##### Adam: Primary backend-specific challenge was implementing token-based authorization, having the backend send a token that can be utilized for authorization and user-specific information on frontend