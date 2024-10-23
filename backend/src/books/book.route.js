const express = require('express')
const router = express.Router();
const Book = require('./book.model');
const { postABook, getAllBooks } = require('./book.controller');

// HOW DATA IS MOVING - 
// frontend => backend-server => controller => book schema => database => send to server => back to frontend


// post a book
// post = when submit something from frontend to db
//get = when get something back from db
//put/batch = when edit or update something
//delete = when delete something

router.post("/create-book", postABook)

//get all books
router.get("/", getAllBooks)

module.exports = router;