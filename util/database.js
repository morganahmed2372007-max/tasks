const mongoose = require("mongoose");

const DBConnection = (callback) => {
   const url = process.env.MONGO_URI;

    if (!url) {
        console.error("❌ Error: MONGO_URI is not defined in the .env file.");
        return;
    }

    mongoose.connect(url)
        .then(() => {
            console.log("✅ DB Connected!!");
            if (callback) callback();
        })
        .catch(err => {
            console.error("❌ DB Connection Error:", err.message);
        });
};

exports.DBConnection = DBConnection;