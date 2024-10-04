import { Reviews } from "@/data/Reviews";

export default function handler(req, res) {
  const { ReviewsId } = req.query;
  const index = Reviews.findIndex((r) => r.id.toString() === ReviewsId);
  console.log(ReviewsId);
  console.log(index);

  if (index !== -1) {
    Reviews.splice(index, 1);
    res.status(200).json(Reviews);
  } else {
    res.status(404).json({ message: "Review not found" });
  }
}
