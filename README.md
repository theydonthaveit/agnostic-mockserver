# agnostic-mockserver

<!-- Build script to create to be run from the project root directory -->
<!-- Compiles TypeScript to JavaScript, copies across all needed files and builds a docker image  -->
Run build.sh

<!-- Run the container with exposed port 3000 on localhost:3000  -->
Run sudo docker run -p 3000:3000 firefly

<!-- Intraspect the docker container  -->
Run sudo docker run -ti firefly /bin/ash

<!-- Use only if you are running the docker container as detached and you want to Intraspect the container  -->
Run sudo docker exec -ti <container_id> /bin/ash