const mongoose = require("mongoose");
const AspirantSchema = new mongoose.Schema({},{ strict: false });
const Aspirant = mongoose.model("tasks", AspirantSchema);
module.exports = Aspirant;
