# Message.ly
Message.ly is a user-to-user private messaging application built with Node.js and Express. It provides functionality for user authentication, sending messages, and integration with Twilio for SMS notifications.

## Table of contents
- Setup 
- Features
- Routes
- Further Study
- Installation
- Usage
- Testing 
- License

## Setup
1. **Install Dependencies**: Make sure all dependencies are installed using `npm install`.
2. **Database Setup**: Create the messagely database and import schema from `data.sql`.
3. **Environment Variables**: Create a `.env` file to store sensitive information like `SECRET_KEY` and `Twilio` credentials (`TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`).
    - `DATABASE_URL` and `SECRET_KEY` are required in the `.env` file to succesfully connect the server with your database. For reference, your `DATABASE_URL` should be like `DATABASE_URL=postgresql:///psql_username:psql_password@localhost:port/database_name` (`database_name` for this app is `messagely` and `port` is typically `5432` on your local machine).

## Features
- User Authentication:

    - Registering new users with username, password, first name, last name, and phone number.
    - Logging in with username and password, updating last login timestamp.
    - Ensuring secure access using JWT tokens.
- User Management:

    - Retrieving basic info on all users.
    - Getting detailed user information by username.
- Messaging:

    - Sending messages from one user to another.
    - Retrieving messages sent to and from a specific user.
    - Marking messages as read, ensuring only the intended recipient can do so.
- Integration with Twilio:

    - Sending SMS notifications to users when they receive a new message.
    - Implementing SMS-backed features like password reset

## Routes
- Authentication Routes (`/auth.js`):

    - POST `/login`: Log in with username and password, returning a JWT token.
    - POST `/register`: Register a new user, log them in, and return a JWT token.

- User Routes (`/users.js`):

    - GET `/`: Get a list of all users.
    - GET `/:username`: Get detailed information about a specific user.
    - GET `/:username/to`: Get messages sent to a specific user.
    - GET `/:username/from`: Get messages sent from a specific user.

- Message Routes (`/messages.js`):

    - GET `/:id`: Get details of a specific message.
    - POST `/`: Send a new message to a user.
    - POST `/:id/read`: Mark a message as read by the recipient.

## Installation
1. Clone the repository: `git clone https://github.com/tunderscoreyler9/Message.ly`
2. Install dependencies: `npm install`
3. Set up the database and environment variables as described in **Setup**.

## Usage
1. Start the server: `npm start`
2. Access the API endpoints using tools like Postman or integrate with a front-end application

## Testing
- Run tests using **Jest**: `npm test` or simply `jest`.
- Ensure to *create* and *seed* the `messagely_test` database for testing purposes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.