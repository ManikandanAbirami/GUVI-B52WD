const express = require("express");
const router = express.Router();
const Book = require("../models/book");

//POST: Add a new book
router.post("/", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
  });

  try {
    const saveBook = await book.save();
    res.send(saveBook);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET: Get all books

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (error) {
    res.status(400).send(error);
  }
});

// PUT: Update a book

router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE: Delete a book

router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndRemove(req.params.id);
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
