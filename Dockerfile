# Use an official latest node as a parent image
FROM node:latest as node

RUN mkdir /app
# Set the working directory to /app
WORKDIR /app

# Install any needed packages
RUN npm install -g @angular/cli@latest

# Copy the current directory contents into the container at /app
COPY . /app

# Run ng serve when the container launches
CMD ng serve --host 0.0.0.0 --port 4200