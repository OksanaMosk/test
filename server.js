const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://OksanaM:PnFTGrXFGI8MfMoS@cluster0.6q7ph4z.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery, true");

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
