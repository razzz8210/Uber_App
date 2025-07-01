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
- Collects: First name, Last name, Email, Password.
- Example form fields:
  - First name: Alice
  - Last name: Smith
  - Email: alice.smith@example.com
  - Password: ********
- On submit, captain data is prepared for backend registration.

### 4. Captain Login (`/captain-login`)
- Allows an existing captain to log in.
- Collects: Email, Password.
- Example form fields:
  - Email: alice.smith@example.com
  - Password: ********
- On submit, credentials are prepared for backend authentication.

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
