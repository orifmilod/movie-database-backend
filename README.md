# movie-database-api

This is simple REST API that interacts with external API (OMDb) build using Node.js and MongoDB.


# Requirements
- Node.js and npm
- MongoDB

# What did I use? 
- MongoDB and Mongoose for object Model schemas.
- Eslint for having a better structured code.
- supertest and chai for testing endpoint.
- celebrate and Joi for securing routers request body.
- nodemon to keep server running hot reloading our node.js app.
- express, because its the best :) 

# Installation
- Clone the repo: ```git clone https://github.com/milad440550/movie-database-api```
- Install dependencies: `npm install`
- Rename .envSample to .env file and fill required variables with your database credentials and OMDb API key
  ```javascript
  DB_URL='<Your mongodb URI>' || 'mongodb://localhost:5000'
  PORT='<Your choosen port>'  || 'movies_api'
  API_KEY='<API key for omdbapi>' || 'ABC'
  ```
- `npm run server` will run server with `nodemon` and you are done! :)
# How to test?
- First complete installation then run ```npm run test``` and you are ready to go.

# Endpoints
Currently server is hosted on heroku and you can make request to this URL
https://movie-database-api1.herokuapp.com/api/v1/
- POST /movies

  Request body should contain only one element `title`. On success, movie will be saved into application database and you will be presented with object that will contain all movie details . 
  On error you will be presented with [error response](#responses).

- GET /movies

  If no query parameters are provided it will simply fetch all movies from the database (10 movies per page by default). 
  This endpoint supports following query parameters:

  | Query parameter  | Description |
  | ------------- | ------------- |
  | page  | Describes currently displayed page. Default value is `1`.  |
  | limit  | Decides how many movies will be displayed per page. Default value is `10`.  |
  | columns | Columns to filter by. You can provide more than one column name by separating each one with comma. For example `title, year`. Note that all column names must be capitalized. | 
  | values | Values for filtering. You can provide more than one value by separathing each one with comma, however please note that value index must match target column index. For example `Guardians of the Galaxy Vol. 2`. |
  | orderBy | Name of column that will be used to sort movies. Default value is `title`. Note that all column names must be capitalized. |
  | order | Order of sorting. Available values are `DESC` and `ASC`. Default value is `ASC` |

  Example query string `/movies?orderBy=year&order=DESC&columns=year&values=2014`. 
  
  It will fetch all movies that were made in 2019, displayed in descending order based on year.

- POST /comments

  Request body must contain two parameters: `movieID` and `comment`. On success it will return object with your freshly created comment, 
  on error you will be presented with [error response](#responses).
  
- GET /comments

  If no query parameters are provided it will fetch all comments from database. This endpoint supports following query parameters:
  
  | Query parameter  | Description |
  | ------------- | ------------- |
  | page  | Describes currently displayed page. Default value is `1`.  |
  | limit  | Decides how many comments will be displayed per page. Default value is `10`.  |
  | movieID  | If provided it will fetch all comments associated with this movie ID.  |
  
   Example query string `/comments?movieID=5dc45af63176aa19689e4ab9`.
   
   It will fetch all comments for movie with ID `5dc45af63176aa19689e4ab9`.
  
   # Responses
   
- Error response
  ```javascript
   {
     error:   {},
     message: ''
   };
    ```   
  For now it's the only type of response that you will receive if something will go wrong. The message property will contain information about the error.
    
    ```javascript
    {
      "statusCode": 400,
      "error": "Bad Request",
      "message": "child \"title\" fails because [\"title\" is required]",
      "validation": {
          "source": "body",
          "keys": [
              "title"
          ]
      }
    }
    ```
If you are missing some parameters in the body you will recieve this error, (routers are protected with <b>celebrate</b> and <b>Joi</b> packages)
