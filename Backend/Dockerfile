# create image based on the official node 10 image from dockerhub
FROM node:10

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# set the working directory for our image
WORKDIR /usr/src/app

# COPY dependency definition
COPY package.json /usr/src/app

# Install dependencies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# EXPOSE the port the app runs in
EXPOSE 5000

# Serve the App
CMD ["npm", "start"]