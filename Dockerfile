# Builds and runs Cage Career 3D. Hosting platforms set $PORT; saves live in /app/save.
FROM eclipse-temurin:21-jdk AS build
WORKDIR /app
COPY src ./src
RUN mkdir out && javac -d out src/mma/*.java

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/out ./out
COPY web ./web
EXPOSE 8080
CMD ["java", "-cp", "out", "mma.Main"]
