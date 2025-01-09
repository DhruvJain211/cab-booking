# /users/register

**Description**  
Registers a new user.

**Method**  
POST

**Endpoint**  
`/users/register`

**Request Body**  
```json
{
  "fullname": {
    "firstname": "<string, required, min 3 chars>",
    "lastname": "<string, optional, min 3 chars>"
  },
  "email": "<string, required, must be valid email>",
  "password": "<string, required, min 6 chars>"
}
```

**Example Response**  
```json
{
  "token": "exampleGeneratedToken",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",   
    "password": "examplePassword"
  }
}
```

# /users/login

**Description**  
Logs in an existing user

**Method**  
POST

**Endpoint**  
`/users/login`

**Request Body**  
```json
{
  "email": "<string, required, must be valid email>",
  "password": "<string, required, min 6 chars>"
}
```

**Example Response**
```json
{
  "token": "exampleGeneratedToken",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "examplePassword"
  }
}
```
