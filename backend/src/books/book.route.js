const express = require('express')
const router = express.Router();
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, updateBook, deleteBook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');

// HOW DATA IS MOVING - 
// frontend => backend-server => controller => book schema => database => send to server => back to frontend


// post a book
// post = when submit something from frontend to db
//get = when get something back from db
//put/batch = when edit or update something
//delete = when delete something

router.post("/create-book", verifyAdminToken ,postABook);

//get all books
router.get("/", getAllBooks);

//single book request
router.get("/:id", getSingleBook);

//update a book endpoint
router.put("/edit/:id", verifyAdminToken, updateBook);

//delete a book
router.delete("/:id", verifyAdminToken, deleteBook);

module.exports = router;