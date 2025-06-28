# User Registration Endpoint Documentation

<!--
This section of the README.md file is intended to document the available API endpoints for the Uber Project backend. Please list each endpoint, its HTTP method, expected request parameters, and response structure. Include authentication requirements and example requests/responses where applicable.
-->
## Endpoint

`POST /users/register`

## Description
Registers a new user in the system. Validates the input data, hashes the password, and returns an authentication token upon successful registration.

## Request Body
Send a JSON object with the following structure:

```
{
  "fullname": {
    "firstname": "string (min 3 chars, required)",
    "lastname": "string (min 3 chars, optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)"
}
```

### Example
```
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Responses

### Success
- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // ...other user fields
    }
  }
  ```

### Validation Error
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

## Example: Get User (Response)

Assuming a `GET /users/:id` endpoint, a typical response might look like:

```json
{
  "_id": "60f7c2b5e1d2c8a1b4e5d6f7",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

---

# User Login Endpoint Documentation

## Endpoint

`POST /users/login`

## Description
Authenticates a user with email and password. Returns a JWT token and user data if credentials are valid.

## Request Body
Send a JSON object with the following structure:

```
{
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)"
}
```

### Example
```
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Responses

### Success
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // ...other user fields
    }
  }
  ```

### Validation Error
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

### Authentication Error
- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "User not found" // or "Invalid credentials"
  }
  ```

## Notes
- Returns a JWT token for authenticated sessions.
- Email and password must match a registered user.

---

# Get User Profile Endpoint Documentation

## Endpoint

`GET /users/profile`

## Description
Returns the authenticated user's profile information. Requires a valid JWT token in the `Authorization` header or as a cookie.

## Authentication
- Required: Yes (JWT token)
- Header: `Authorization: Bearer <token>`

## Response

### Success
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "user": {
      "_id": "60f7c2b5e1d2c8a1b4e5d6f7",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

### Authentication Error
- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Authentication token is missing" // or "Invalid token" or "Token is blacklisted"
  }
  ```

---

# User Logout Endpoint Documentation

## Endpoint

`GET /users/logout`

## Description
Logs out the authenticated user by blacklisting the JWT token. Requires a valid JWT token in the `Authorization` header or as a cookie.

## Authentication
- Required: Yes (JWT token)
- Header: `Authorization: Bearer <token>`

## Response

### Success
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

### Authentication Error
- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Authentication token is missing" // or "Invalid token" or "Token is blacklisted"
  }
  ```

## Notes
- The logout endpoint blacklists the current JWT token, preventing further use.
- Both endpoints require the user to be authenticated.

---

# Captain Registration Endpoint Documentation

## Endpoint

`POST /captains/register`

## Description
Registers a new captain in the system. Validates the input data, hashes the password, and returns an authentication token upon successful registration. Vehicle information is required.

## Request Body
Send a JSON object with the following structure:

```
{
  "fullname": {
    "firstname": "string (min 3 chars, required)",
    "lastname": "string (min 3 chars, required)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)",
  "vehicle": {
    "color": "string (min 3 chars, required)",
    "plate": "string (format: 'UP 66 KY 2023', required)",
    "capacity": "integer (1-10, required)",
    "vehicleType": "string (car|bike|auto, required)"
  }
}
```

### Example
```
{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "password": "strongPassword123",
  "vehicle": {
    "color": "Red",
    "plate": "UP 66 KY 2023",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Responses

### Success
- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "captain": {
      "_id": "<captain_id>",
      "fullname": {
        "firstname": "Alice",
        "lastname": "Smith"
      },
      "email": "alice.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "UP 66 KY 2023",
        "capacity": 4,
        "vehicleType": "car"
      },
      // ...other captain fields
    }
  }
  ```

### Validation Error
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

### Duplicate Email Error
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "message": "Captain with this email already exists"
  }
  ```

## Notes
- The `email` and `vehicle.plate` must be unique.
- The `password` is securely hashed before storage.
- On success, a JWT token is returned for authentication.
- All vehicle fields are required and validated.

---

# Example: Get Captain (Response)

Assuming a `GET /captains/:id` endpoint, a typical response might look like:

```json
{
  "_id": "60f7c2b5e1d2c8a1b4e5d6f8",
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "UP 66 KY 2023",
    "capacity": 4,
    "vehicleType": "car"
  },
  "socketId": null,
  "isOnline": false,
  "location": {
    "latitude": null,
    "longitude": null
  }
}
```

---

# Other Captain Endpoints

> Add documentation for login, profile, and logout endpoints for captains if implemented, following the same structure as above.
