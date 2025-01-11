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

# /users/profile  

**Description**  
Get current user profile information

**Method**  
GET 

**Endpoint**  
`/users/profile`

**Headers**  
```json
{
  "Authorization": "Bearer <token>"
}
```
**Example Response**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "socketId": null,
  "_id": "exampleUserId",
  "__v": 0
}
```

Response Status Codes

200: Profile retrieved successfully
401: Unauthorized - Invalid or missing token

# /users/logout  

**Description**  
Logout the current user and blacklist the token provided in cookie or headers 

**Method**  
GET 

**Endpoint**  
`/users/logout`

**Headers**  
Requires a valid JWT token in the Authorization header or cookie

# /captains/register

**Description**  
Registers a new captain

**Method**  
POST

**Endpoint**  
`/captains/register`

**Request Body**  
```json
{
  "fullname": {
    "firstname": "<string, required, min 3 chars>",
    "lastname": "<string, optional, min 3 chars>"
  },
  "email": "<string, required, must be valid email>",
  "password": "<string, required, min 6 chars>",
  "vechicle": {
    "color": "<string, required, min 3 chars>",
    "plate": "<string, required, min 3 chars>",
    "capacity": "<number, required, min 1>",
    "vechicleType": "<string, required, one of [car, auto, bike]>"
  }
}
```
**Example Response**
```json
{
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "examplePassword",
    "vechicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 3,
      "vechicleType": "car"
    },
    "_id": "60c744fe355215000a875d79",
    "__v": 0
  }
}
```

