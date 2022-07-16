FROM openjdk:18.0.1.1-buster
EXPOSE 8080
ARG JAR_FILE=target/users-1.0-SNAPSHOT.jar
ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]


