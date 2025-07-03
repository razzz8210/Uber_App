# Uber Project Frontend - Authentication Pages

This frontend React app provides user and captain authentication flows for the Uber Project. Below are the main authentication-related pages and their purposes.

## Pages Overview

### 1. User Signup (`/signup`)
- Allows a new user to register.
- Collects: First name, Last name, Email, Password.
- Example form fields:
  - First name: John
  - Last name: Doe
  - Email: john.doe@example.com
  - Password: ********
- On submit, user data is prepared for backend registration.

### 2. User Login (`/login`)
- Allows an existing user to log in.
- Collects: Email, Password.
- Example form fields:
  - Email: john.doe@example.com
  - Password: ********
- On submit, credentials are prepared for backend authentication.

### 3. Captain Signup (`/captain-signup`)
- Allows a new captain to register.
- Collects:
  - First name
  - Last name
  - Email
  - Password
  - Vehicle Color
  - Vehicle Plate
  - Vehicle Capacity
  - Vehicle Type (car, bike, auto)
- Example form fields:
  - First name: Alice
  - Last name: Smith
  - Email: alice.smith@example.com
  - Password: ********
  - Vehicle Color: Red
  - Vehicle Plate: UP 66 KY 2023
  - Vehicle Capacity: 4
  - Vehicle Type: car
- On submit, data is sent to the backend `/captains/register` endpoint. On success, captain is redirected to the captain home page.

### 4. Captain Login (`/captain-login`)
- Allows an existing captain to log in.
- Collects:
  - Email
  - Password
- Example form fields:
  - Email: alice.smith@example.com
  - Password: ********
- On submit, credentials are sent to `/captains/login`. On success, captain is redirected to the captain home page.

## Navigation
- Users and captains can switch between login and signup pages using provided links.
- Home page (`/`) provides entry points to authentication flows.

## Technologies Used
- React
- React Router
- Tailwind CSS (for styling)

## Notes
- Form submissions currently log data to the console or update local state. Integrate with backend API for full authentication.
- All forms include basic validation (required fields).

---

For more details, see the code in the `src/pages/` directory.

# Uber Project Frontend - Captain Authentication Pages

This section documents the captain authentication flows in the Uber Project frontend React app.

## Captain Pages Overview

### 1. Captain Signup (`/captain-signup`)
- Allows a new captain to register.
- Collects:
  - First name
  - Last name
  - Email
  - Password
  - Vehicle Color
  - Vehicle Plate
  - Vehicle Capacity
  - Vehicle Type (car, bike, auto)
- Example form fields:
  - First name: Alice
  - Last name: Smith
  - Email: alice.smith@example.com
  - Password: ********
  - Vehicle Color: Red
  - Vehicle Plate: UP 66 KY 2023
  - Vehicle Capacity: 4
  - Vehicle Type: car
- On submit, data is sent to the backend `/captains/register` endpoint. On success, captain is redirected to the captain home page.

### 2. Captain Login (`/captain-login`)
- Allows an existing captain to log in.
- Collects:
  - Email
  - Password
- Example form fields:
  - Email: alice.smith@example.com
  - Password: ********
- On submit, credentials are sent to `/captains/login`. On success, captain is redirected to the captain home page.

### 3. Captain Home (`/captain-home`)
- Protected route, only accessible to authenticated captains.
- Uses `CaptainProtectWrapper` to check authentication and fetch captain profile from `/captains/profile`.
- If not authenticated, redirects to `/captain-login`.

### 4. Captain Logout (`/captains/logout`)
- Logs out the captain by calling `/captains/logout` on the backend.
- Removes token from local storage and redirects to `/captain-login`.

## Context
- `CaptainProvider` and `CaptainContext` manage captain authentication state across the app.
- Use `useContext(CaptainContext)` to access or update captain data.

## Example Captain Signup Payload
```json
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

## Example Captain Login Payload
```json
{
  "email": "alice.smith@example.com",
  "password": "strongPassword123"
}
```

## Notes
- All captain authentication flows use React Context for state management.
- API base URL is set via `VITE_BASE_URL` environment variable.
- All forms include basic validation (required fields).
- See `src/pages/` and `src/context/CaptainProvider.jsx` for implementation details.
