const mongoose = require("mongoose");
const app = require("./app");

// mongodb+srv://Olga:RhzR82013@cluster0.vccjg.mongodb.net/test

// RhzR82013

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
