import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import ReadList from "../../components/ReadList/ReadList";
import WishCart from "../../components/WishCart/WishCart";
import { getReadList } from "../../utils";

const ListedBooks = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [sort, setSort] = useState('');

  const [readList, setReadList] = useState([]);

  useEffect(() => {
    setReadList(getReadList())
  }, [])

  const handleSort = (type) => {
    setSort(type)
    if(type === 'pages' ){
        const sortedByPages = [...readList].sort((a,b) => a.totalPages - b.totalPages);
        setReadList(sortedByPages)
    }
    if(type === 'ratings'){
        const sortedByRatings = [...readList] .sort((a,b) => a.rating - b.rating);
        setReadList(sortedByRatings)
    }
  }
  return (
    <Container>
      <div>
        <div className="flex justify-center items-center flex-col bg-stone-100 py-10 rounded-2xl">
          <div className="">
            <h2 className="text-4xl font-bold ">Books</h2>
          </div>
          <div className="dropdown dropdown-bottom dropdown-center pt-10">
            <div tabIndex={0} role="button" className="btn m-1 bg-green-500">
              Sort By ⬇️
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => handleSort('pages')} >Pages</a>
              </li>
              <li>
                <a onClick={() => handleSort('ratings')}>Ratings</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex  overflow-x-auto overflow-y-hidden  flex-nowrap mt-10">
          <a
            rel="noopener noreferrer"
            href="#"
            onClick={() => setActiveTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-600 dark:text-gray-600 ${
              activeTabIndex === 0
                ? "border border-b-0 rounded-t-lg "
                : "border-b"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read List</span>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            onClick={() => setActiveTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2   dark:border-gray-600 dark:text-gray-900 ${
              activeTabIndex === 1
                ? "border-b-0 rounded-t-lg border"
                : "border-b"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span> Wish Cart </span>
          </a>
        </div>

        {/* Tab content */}
        <div className="mt-6">
          {activeTabIndex === 0 && <ReadList books={readList} />}
          {activeTabIndex === 1 && <WishCart />}
        </div>
      </div>
    </Container>
  );
};

export default ListedBooks;
