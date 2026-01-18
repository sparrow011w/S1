
-- Sparrow Agency Operational Database Schema
-- Use this to create your tables on Hostinger MySQL

CREATE TABLE IF NOT EXISTS submissions (
    id VARCHAR(50) PRIMARY KEY,
    type ENUM('PARTNERSHIP', 'REPORT', 'CONTACT') NOT NULL,
    status ENUM('PENDING', 'VERIFIED', 'ARCHIVED') DEFAULT 'PENDING',
    data JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Example: How to insert a partnership
-- INSERT INTO submissions (id, type, data) VALUES ('OP-12345', 'PARTNERSHIP', '{"fullName": "John Doe", "email": "john@example.com"}');
