import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
   
    const fetchImages = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );
      const data = await response.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
        GOT Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <div key={image.id} className="p-4 bg-gray-100 rounded-lg shadow">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold text-gray-700 mt-2">
              {image.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
