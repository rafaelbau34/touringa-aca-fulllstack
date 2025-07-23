FROM maven:3.9.6-eclipse-temurin-17

WORKDIR /app

COPY . /app

RUN chmod +x ./mvnw || true

RUN ./mvnw dependency:go-offline

CMD ["./mvnw", "spring-boot:run"]
