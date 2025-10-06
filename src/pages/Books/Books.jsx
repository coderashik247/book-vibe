import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard/BookCard";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);
  return (
    <div className="">
        <h2 className="text-center my-10 font-bold text-4xl">Books </h2>
      <div className="grid grid-cols-3 gap-6">
        {allBooks.map((book) => (
          <BookCard book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
