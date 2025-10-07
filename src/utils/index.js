export const getReadList = () => {
    let readList = [];
    const storedReadList = localStorage.getItem("readList");
    if (storedReadList) {
        readList = JSON.parse(storedReadList)
    }
    return readList;
}

export const saveReadList = (book) => {
    // if (!book || typeof book !== 'object' || !book.id) {
    //     console.error("Invalid book passed to saveReadList:", book);
    //     alert("Invalid book data!");
    //     return;
    // }

    let readList = getReadList();
    const isExist = readList.find(item => item.bookId === book.bookId)
    if (isExist) {
        return alert("Already Exist !!!");
    }
    else {
        readList.push(book);
        localStorage.setItem("readList", JSON.stringify(readList))
        alert("Save Successfully !!!");
    }
} 