FROM node:18-alpine

# Initialize a working directory in new OS
WORKDIR /app

# Copy package.json to the working directory
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy all the files from CWD to container's working directory
COPY . .

# Expose the application
EXPOSE 3000

# Start development server
CMD npm run dev