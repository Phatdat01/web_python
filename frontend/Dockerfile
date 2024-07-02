FROM node:16

WORKDIR /app

COPY package*.json ./

# Set npm proxy if required (uncomment and set your proxy if behind one)
# RUN npm config set proxy http://your-proxy-address:port
# RUN npm config set https-proxy http://your-proxy-address:port

# Increase npm timeout settings
RUN npm config set fetch-timeout 60000 && \
    npm config set fetch-retries 5 && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000

RUN npm install --force

COPY . .

EXPOSE 3000

CMD ["npm", "start"]