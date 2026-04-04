import type { Request, Response } from "express";
import Review from "../models/review.js";
import mongoose from "mongoose";

export const getReviews = async (req: Request, res: Response) => {
  const reviews = await Review.find({}).populate("book");
  res.send(reviews);
};

export const createReview = async (req: Request, res: Response) => {
  const { text, rating, bookId } = req.body;
  if (!mongoose.Types.ObjectId.isValid(String(bookId))) {
    return res.status(400).send({ message: "Invalid ID" });
  }

  const review = await Review.create({ text, rating, book: bookId });
  res.status(201).send(review);
};
