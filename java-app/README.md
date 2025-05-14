# Spring Boot Application

This is a Spring Boot application that provides a simple "Hello World" REST endpoint.

## Prerequisites

- Java 17 or higher
- Maven 3.6 or higher
- Docker (optional)

## Building the Application

To build the application, run:

```bash
mvn clean package
```

## Running the Application

### Using Maven

```bash
mvn spring-boot:run
```

### Using Docker

1. Build the Docker image:
   ```bash
   docker build -t hello-world .
   ```

2. Run the container:
   ```bash
   docker run -p 8080:8080 hello-world
   ```

## Accessing the Application

Once running, the application will be available at:
- http://localhost:8080

## Testing

Run the tests with:

```bash
mvn test
```

## CI/CD

This project includes GitLab CI/CD configuration with:
- Build stage
- Test stage
- SonarQube analysis 