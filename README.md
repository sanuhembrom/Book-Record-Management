# Book-Record-Management

Server >> Storing certain bok data
       >> User Register 
       >> Subscriber 


This is a book record management API Server/ Backend for the library system or management of records or manuals of books

Fine System:
User: 25/03/2025 - 06/06/2025
07/06/2025 => 50/-

## Subscription type
3 Months (Basic)
6 months (Standard)
9 months (Premium)

If the Subscription type is Basic && if the subscription date is 06/06/2025
=> Then subscription valid till 06/09/2025

Within subscription date >> if we miss the renewal >>50/- day
subscription date is also been missed >> and also missed the renewal >> 100 + 50/- day

# Routes and Endpoints

## /users
POST: Create a new user 
GET : Get all the user info here

## /users/{id}
GET: Get a user by id
PUT: update a user by their ID
DELETE: Delete a User by id (check if he/she have an issued book) && (Is there any fine to be paid)

## users/subscription-details{id}
GET: Get user Subsciption details
        >> Date of Subscription
        >> Valid date
        >> Is there is any fine

## /books
GET: Get all the books
POST: Created/Add a new book

## /books/{id}
GET: Get a book by id
PUT: Update a book by id

## /books/issued
GET: all issued books

## /books/issued/withFine
GET: Get all issused books with their fine

# npm init
## npm i nodemon --save-dev
// If express is not installed 
## npm i express
## npm run dev