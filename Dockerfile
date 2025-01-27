# Use a lightweight Node.js base image
FROM node:22-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

RUN npm install

# Install dependencies in production mode
# RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the port the app will run on
EXPOSE 5000

# Set environment variable for production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "run", "start:prod"]
