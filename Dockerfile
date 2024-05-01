# Use the official Node.js image with tag 16-alpine as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the contents of the current directory into the container at /app
COPY . /app

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Expose port 5000 to the outside world
EXPOSE 5000

# Command to run the application
CMD ["npm", "start"]
