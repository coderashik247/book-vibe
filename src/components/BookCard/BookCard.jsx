import React from "react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link to={`/book/${book.bookId}`} className="rounded-xl border border-gray-200 p-4 shadow-sm ">
      {/* Book Image */}
      <div className="flex m-6 rounded-xl bg-stone-100 justify-center mb-4">
        <img
          src={book.image} // Example book cover
          alt={book.bookName}
          className="h-50 object-contain my-9"
        />
      </div>

      {/* Tags */}
      <div className="flex gap-2 mb-3 ml-6">
        {book.tags.map((tag,index) => (
          <span key={index} className="bg-green-100 text-green-700 text-base px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Title & Author */}
      <h3 className="text-3xl fontPlayFair ml-6 font-bold text-gray-900">
        {book.bookName}
      </h3>
      <p className="text-lg ml-6 mt-2 text-gray-600 mb-4">By : {book.author} </p>

      {/* Bottom Row */}
      <div className="flex mx-6 justify-between items-center text-base text-gray-700">
        <span> {book.category} </span>
        <span className="font-semibold"> {book.rating} ★</span>
      </div>
    </Link >
  );
};

export default BookCard;
