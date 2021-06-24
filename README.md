it is a user management system that uses JWT for authentication

#API to get all the users

localhost:3000/api/user/all --> get method

#API for login

localhost:3000/api/login -->post method, gives a JWT Token

#API to get details of logged in user

localhost:3000/api/user -->get method, requires JWT Token

#API to create a new user

localhost:3000/api/user/create -->post method, requires JWT Token

#API to update a user

localhost:3000/api/user/update -->put method, requires JWT Token, validation- email-id cant be changed

#API to delete a user

localhost:3000/api/user/delete -->delete method, requires JWT Token
