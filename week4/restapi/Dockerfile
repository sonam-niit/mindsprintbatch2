# Start with a base image containing Java runtime
FROM openjdk:17-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the packaged JAR file into the container
COPY target/restapi-0.0.1-SNAPSHOT.jar /app/restapi-0.0.1-SNAPSHOT.jar

# Expose the port on which your Spring Boot application will run
EXPOSE 8082

# Define the environment variables for MySQL connection
ENV SPRING_DATASOURCE_URL=jdbc:mysql://host.docker.internal:3306/restapi
ENV SPRING_DATASOURCE_USERNAME=root
ENV SPRING_DATASOURCE_PASSWORD=Sonam@123

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "/app/restapi-0.0.1-SNAPSHOT.jar"]
