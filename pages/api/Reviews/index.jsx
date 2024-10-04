import { Reviews } from "@/data/Reviews";
import { v4 as uuid } from "uuid";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(Reviews);
  } else if (req.method === "POST") {
    const { rev, usname } = req.body;
    const newReview = { id: uuid(), Username: usname, Review: rev };
    console.log(req.body);
    Reviews.push(newReview);
    res.status(200).json(Reviews);
  }
}
