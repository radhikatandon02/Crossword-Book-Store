const express = require('express')
const app = express()
const cors = require('cors');

const mongoose = require('mongoose');

const port = process.env.PORT || 5000;
require('dotenv').config()

//middleware
app.use(express.json());
app.use(cors({
  origin: ['http://127.0.0.1:5173'],
  credentials: true
}));

//routes
const bookRoutes = require('./src/books/book.route')
const orderRoutes = require('./src/orders/order.route')
const userRoutes = require('./src/users/user.route')
const adminRoutes = require('./src/stats/admin.stats')

app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)



app.use('/', (req, res) => {
  res.send('This is the server up and running')
})


async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use('/', (req, res) => {
        res.send('This is the server up and running')
      })
}

main().then(()=> console.log("Mongodb connect success")).catch(err => console.log(err));
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})