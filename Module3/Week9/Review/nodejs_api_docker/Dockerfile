# Select the docker image to build container (slim only for first steps)
FROM node:18.18-slim as BUILDER
# Inform the owner/maintener
LABEL maintener="Gabriel Brito"
# Directory to run container
WORKDIR /usr/src/app

# Instructions to copy files from some place to another ("./" means root directory)
COPY package.json ./
# Tell docker what to do after copying files (install packages on the environment)
RUN npm install
# Same structure to copy
COPY src ./src

# new node version to build app (alpine is faster)
FROM node:18.18-alpine
# Using dotenv
ARG NODE_ENV
# Change directory
WORKDIR /usr/src/app
# Copy build
COPY --from=BUILDER /usr/src/app/ ./
# Port on Docker
EXPOSE 3000
# Command line "npm run"
CMD [ "npm", "start" ]