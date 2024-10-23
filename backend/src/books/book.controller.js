const Book = require("./book.model");

const postABook = async (req,res) => {
    try{
        const newBook = await Book({...req.body})
        await newBook.save();
        res.status(200).send({message: "Book created successfully", book: newBook})
    } catch (error) {
        console.error("Error creating book", error);
        res.status(500).send({message: "Failed to create book"})
    }
}

const getAllBooks = async (req,res) => {
    try {
        const books = await Book.find
    } catch (error) {
        console.error("Error fetching book", error);
        res.status(500).send({message: "Failed to fetch book"})
    }
}

module.exports = {
    postABook, getAllBooks
}