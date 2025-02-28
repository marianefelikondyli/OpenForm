FROM node:20.14-alpine

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY . .

# ==== BUILD =====

# Install dependencies
RUN npm install ci


# Build the app
RUN npm run build
RUN rm -rf !dist

EXPOSE 3030

# Start the app
CMD [ "npx", "serve", "-s", "dist", "--listen", "3030" ]