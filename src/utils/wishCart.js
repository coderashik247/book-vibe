export const getWishCart = () => {
    let wishCart = [];
    const storedWishCart = localStorage.getItem("wishCart");
    if(storedWishCart){
        wishCart = JSON.parse(storedWishCart)
    }
    return wishCart
}

export const saveWishCart = (book) => {
    let wishCart = getWishCart();
    const isExist = wishCart.find(cart => cart.bookId === book.bookId)
    if(isExist){
        return alert ("Already Exits");
    }
    else{
        wishCart.push(book);
        localStorage.setItem("wishCart", JSON.stringify(wishCart));
        alert ("Successfully Saved !!!");
    }
}