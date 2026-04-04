import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  genre: {
    type: String,
    enum: ["fiction", "non-fiction", "biography", "science", "history"],
    required: true,
  },
  year: {
    type: Number,
  },
  tags: {
    type: [String],
  },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
