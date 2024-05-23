FROM node:20-alpine
# Create app directory

WORKDIR /app
# Install app dependencies

COPY . .
# COPY package* .

RUN npm install
RUN npm run build
RUN npx prisma generate

EXPOSE 3000
CMD ["node", "dist/index.js"]
