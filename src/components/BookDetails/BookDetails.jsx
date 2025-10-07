import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { saveReadList } from "../../utils";

const BookDetails = () => {
    const navigate =useNavigate();
  const { bookId } = useParams();
  const getBookId = parseInt(bookId);
  const bookData = useLoaderData();
  const singleBook = bookData.find((b) => b.bookId === getBookId);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;

  console.log("Single Book: ",singleBook)

  const handleMarkAsRead = (bookData) =>{
    console.log(bookData);
    saveReadList(bookData)
    navigate("/listedBooks")
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md flex flex-col md:flex-row gap-6 mt-5">
      {/* Left: Book Image */}
      <div className="md:w-1/3 flex justify-center items-start">
        <img
          src={image} // Example image
          alt={bookName}
          className="w-64 h-auto rounded-lg shadow"
        />
      </div>

      {/* Right: Book Info */}
      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold mb-2"> {bookName} </h2>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">By :</span> {author}
        </p>

        <p className="text-md font-medium text-gray-700 mb-4"> {category} </p>

        {/* Review */}
        <div className="mb-4 border-t pt-4">
          <p>
            <span className="font-semibold">Review :</span> {review}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <p className="font-semibold mb-3">Tag</p>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 text-base px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 border-t pt-4 mb-6 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Number of Pages:</span>
            <span className="font-semibold"> {totalPages} </span>
          </div>
          <div className="flex justify-between">
            <span>Publisher:</span>
            <span className="font-semibold"> {publisher} &amp; Co.</span>
          </div>
          <div className="flex justify-between">
            <span>Year of Publishing:</span>
            <span className="font-semibold"> {yearOfPublishing} </span>
          </div>
          <div className="flex justify-between">
            <span>Rating:</span>
            <span className="font-semibold"> {rating} </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button onClick={() => handleMarkAsRead(singleBook)} className="px-6 py-2 border border-black text-black rounded-md hover:bg-gray-100">
            Mark as Read
          </button>
          <button onClick={() => navigate("/listedBooks")} className="px-6 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
