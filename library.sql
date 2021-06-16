-- pulse check
-- Q1 / A
CREATE DATABASE library;
-- B
USE library;
-- C
CREATE TABLE books (
    id INT AUTO_INCREMENT NOT NULL,
    title varchar(255),
    author varchar(255),
    published_at varchar(255),
    price INT,
    PRIMARY KEY(id)
);
-- D
INSERT INTO books (title, author, published_at, price) VALUES ('javascript', 'moh', 'jordan', 15 );
INSERT INTO books (title, author, published_at, price) VALUES ('python', 'bess', 'jordan', 25 );
INSERT INTO books (title, author, published_at, price) VALUES ('java', 'ayman', 'jordan', 20 );
INSERT INTO books (title, author, published_at, price) VALUES ('ruby', 'mai', 'jordan', 15 );
INSERT INTO books (title, author, published_at, price) VALUES ('php', 'jouza', 'jordan', 20 );
-- E
SELECT * FROM books
-- F
SELECT * FROM books WHERE author='moh';
-- G 
UPDATE books SET price = 20 WHERE id = 1;
-- H
DELETE FROM books WHERE title ='php';

-- Practice

-- Q4
INSERT INTO books (title, author, published_at) VALUES ('abc','someone','somewhere');




