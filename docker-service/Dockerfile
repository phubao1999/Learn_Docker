# Đưa môi trường của nodejs vào đây
FROM node:12

# App Directory
WORKDIR /app

# Copy các file có cú pháp bắt đầu là package....json vào thư working directory
COPY package*.json ./

# Cài node_modules vào app
RUN npm install

# Copy tất các code, file,... lên working directory
COPY . .

ENV PORT=8080

# Expose cổng 8080 của container này trên docker
EXPOSE 8080

# Chạy lệnh npm start để start server
CMD [ "npm", "start"]