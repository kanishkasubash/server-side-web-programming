# Use Node.js 20-alpine image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Run the app
CMD [ "npm", "start" ]