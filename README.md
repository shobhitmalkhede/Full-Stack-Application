This is the file where you provide instructions on how to set up, run, and deploy the backend application.

# Spring Boot Backend

## Project Setup

1. Clone this repository:

git clone https://github.com/yourusername/backend.git


2. Go to the project directory:

cd backend


3. Build the project using Maven:

mvn clean install


4. Run the Spring Boot application:

mvn spring-boot:run


## Configuration

- The backend connects to MySQL. Ensure MySQL is running and the database is set up correctly:
- For development, the database is configured in `application-dev.properties`.
- For production, update `application-prod.properties` with your database credentials.

## API Endpoints

- **GET /api/users**: Fetch all users.
- **POST /api/users**: Create a new user (requires `name` and `email` fields).