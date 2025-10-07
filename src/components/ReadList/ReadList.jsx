import React, { useEffect, useState } from "react";
import { getReadList } from "../../utils";
import { MdOutlineAddLocationAlt, MdOutlineContactPage } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router";

const ReadList = () => {
    const navigate = useNavigate();
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const savedReadList = getReadList();
    console.log("✅ Loaded Read List:", savedReadList); // Debug log
    setReadList(savedReadList);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4">
      {readList.map((book) => (
        <div
          key={book.bookId}
          className="flex gap-4 p-4 border rounded-lg shadow-sm bg-white"
        >
          <div className="bg-stone-100 p-6 px-[100px]  justify-center items-center flex">
            <img
              src={book.image}
              alt={book.bookName}
              className="w-[150px] h-auto rounded"
            />
          </div>
          <div className="flex-1 ml-10 space-y-4 ">
            <h2 className="text-3xl fontPlayFair font-bold">{book.bookName}</h2>
            <p className="text-lg text-gray-600">By: {book.author}</p>
            <p className="text-lg text-gray-500">Publisher: {book.publisher}</p>
            <div className="flex space-x-5">
              <div className=" flex justify-start items-center gap-3">
                <p className="font-semibold">Tag</p>
                {book.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-700 text-base px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-lg flex justify-center items-center gap-3">
                <MdOutlineAddLocationAlt size={20} /> Year of Publishing:{" "}
                {book.yearOfPublishing}
              </p>
            </div>
            {/* <FaUsers /> */}
            <div className="flex gap-5">
              <p className="flex justify-center items-center gap-3 text-lg ">
                {" "}
                <FaUsers size={25} /> Publisher: {book.publisher}
              </p>
              <p className="text-lg flex justify-center items-center gap-3"> <MdOutlineContactPage size={25} /> Pages: {book.totalPages}</p>
            </div>
            <div className="flex gap-6 text-lg border-t-2 border-stone-300 pt-3">
                <div className="bg-blue-100 text-blue-700  px-8 py-3 rounded-full">
                    <p>Category: {book.category} </p>
                </div>
                <div className="bg-orange-100 text-orange-800  px-8 py-3 rounded-full">
                    <p>Rating: {book.rating} </p>
                </div>
                <div className="text-white font-bold bg-green-500 rounded-full px-8 py-3">
                    <button className="hover:cursor-pointer hover:scale-105" onClick={() => navigate(`/book/${book.bookId}`)}>View Details</button>
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadList;
