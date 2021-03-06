import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  groenies: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);
