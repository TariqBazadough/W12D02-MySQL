const express = require("express");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(express.json());
const connection = require("./db");

const newBook = (req, res) => {
  const { title, author, published_at, price } = req.body;
  const command = `INSERT INTO books (title, author, published_at, price) VALUES (?,?,?,?);`;
  const data = [title, author, published_at, price];
  connection.query(command, data, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
};

const getAllBooks = (req, res) => {
  const command = ` SELECT * FROM books;`;
  connection.query(command, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
};

const updateBook = (req, res) => {
  const id = req.params.book_id;
  const { title, author, published_at, price } = req.body;
  const data = [title, author, published_at, price, id];
  const command = `UPDATE books SET title =?, author =?, published_at =?, price = ? WHERE id = ?;`;
  connection.query(command, data, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
};

const deleteBook = (req, res) => {
  const id = req.params.book_id;
  const data = [id];
  const command = `DELETE FROM books WHERE id = ?`;
  connection.query(command, data, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
};

const getAllBooksByDescendingOrder = (req, res) => {
  // return all books by descending order of the book id
  const command = `SELECT * FROM books ORDER BY id DESC;`;
  connection.query(command, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
};

const getAllBooksWithNoPrice = (req, res) => {
  const command = `SELECT * FROM books WHERE price IS NULL;`;
  connection.query(command, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
};

const getAllBooksWithPrice = (req, res) => {
  const command = `SELECT * FROM books WHERE price IS NOT NULL;`;
  connection.query(command, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
};

app.post("/books", newBook);
app.get("/books", getAllBooks);
app.put("/books/:book_id", updateBook);
app.delete("/books/:book_id", deleteBook);
app.get("/descending", getAllBooksByDescendingOrder);
app.get("/price/null", getAllBooksWithNoPrice);
app.get("/price", getAllBooksWithPrice);

app.listen(PORT, () => {
  console.log("server run on port " + PORT);
});
