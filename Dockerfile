FROM mhart/alpine-node:4.6.0

# Set working directory inside container
WORKDIR /app

# Update npm
RUN npm install -g npm@3.10.8

# Copy package file separately to utilize Docker layering
COPY package.json /app/package.json

# Install application dependencies
RUN npm install --progress=false

# Copy everything into container
COPY . /app

# Expose the port
EXPOSE 3000

# Run the app
CMD ["npm" ,"start"]
