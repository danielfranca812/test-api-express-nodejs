CREATE DATABASE IF NOT EXISTS  appdb;
USE appdb;

CREATE TABLE IF NOT EXISTS users (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  type ENUM('admin', 'user') NOT NULL DEFAULT 'user',
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (id, name, email, type, password) VALUES
 (UUID(), 'Daniel', 'daniel.franca@spsgroup.com.br', 'user', '1234'),
 (UUID(), 'Rafael', 'rafael.franca@spsgroup.com.br', 'user', '1234'),
 (UUID(), 'Mateus', 'mateus.franca@spsgroup.com.br', 'user', '1234'),
 (UUID(), 'admin', 'admin@spsgroup.com.br', 'admin', '1234');