import React, { useState, useEffect, memo } from "react";
import { Reviews } from "@/data/Reviews";

const Index = () => {
  const [reviews, setReviews] = useState([]);
  const [rev, setRev] = useState("");
  const [usname, setUsname] = useState("");
  const [editId, setEditId] = useState(null); // State to track the review ID being edited

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/Reviews");
    const data = await res.json();
    setReviews(data);
  };

  const postRev = async () => {
    const res = await fetch("http://localhost:3000/api/Reviews", {
      method: "POST",
      body: JSON.stringify({ rev, usname }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setReviews(data);
    setRev("");
    setUsname("");
  };

  const deleteRev = async (id) => {
    const res = await fetch(`http://localhost:3000/api/Reviews/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      const data = await res.json();
      setReviews(data);
    }
  };

  const editRev = async (id) => {
    // Fetch the specific review to edit
    const res = await fetch(`http://localhost:3000/api/Reviews/${id}`);
    if (res.ok) {
      const reviewToEdit = await res.json();
      // Set the review data into state for editing
      setRev(reviewToEdit.Review);
      setUsname(reviewToEdit.Username);
      setEditId(id); // Set the ID of the review being edited
    }
  };

  const updateRev = async (id) => {
    // Perform update request with the edited data
    const res = await fetch(`http://localhost:3000/api/Reviews/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ rev, usname }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const data = await res.json();
      setReviews(data);
      setRev("");
      setUsname("");
      setEditId(null); // Clear edit state after successful update
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">
              Username: {review.Username}
            </h2>
            <p className="text-gray-700 mb-4">Review: {review.Review}</p>
            <button
              className="btn bg-red-800 text-white hover:bg-red-700 py-2 px-4 rounded"
              onClick={() => deleteRev(review.id)}
            >
              Delete
            </button>
            <button
              className="btn bg-blue-800 text-white hover:bg-blue-600 py-2 px-4 rounded"
              onClick={() => editRev(review.id)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <textarea
          className="textarea textarea-info w-full mb-4 p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
          placeholder="Review"
          type="text"
          value={rev}
          onChange={(event) => {
            setRev(event.target.value);
          }}
        ></textarea>
        <input
          className="input input-bordered w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
          placeholder="Username"
          type="text"
          value={usname}
          onChange={(event) => {
            setUsname(event.target.value);
          }}
        />
        {editId !== null && (
          <button
            className="btn bg-blue-600 text-white hover:bg-blue-500 py-2 px-4 rounded-lg"
            onClick={updateRev}
          >
            Update
          </button>
        )}
        <button
          className="btn bg-blue-600 text-white hover:bg-blue-500 py-2 px-4 rounded-lg"
          onClick={postRev}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default memo(Index);
