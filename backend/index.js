const express = require('express')
const app = express()

const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

require('dotenv').config()


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