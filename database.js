//database.js
const mogoose = require("mongoose");

function connectToDatabase() {
    mogoose.connect(process.env.DATABASE_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    const db = mogoose.connection;
    db.on("error", (error) => console.log(error));
    db.once("open", () => { console.log("💻 Connected to the database!") });

}


module.exports = { connectToDatabase };
