# Use the official Node.js image from the Docker Hub
FROM node:22

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Ensure that index.js is executable (if necessary)
# RUN chmod +x index.js

# Expose the port that the app will run on
EXPOSE 8000

# Define the command to run the app
CMD ["node", "index.js"]