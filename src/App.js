import React, { useState } from "react";
import classes from "./App.module.css";
import Header from "./UI/Header";
import Divider from "./UI/Divider";
import BooksCard from "./Books/BooksCard";
import AddBookForm from "./Books/AddBookForm";
import BookStore from "./assets/book-store.jpg";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [bookList, setBookList] = useState("");

  const addNewBookHandler = () => {
    setShowForm(true);
    // console.log("clicked");
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  const newBookHandler = (newBook) => {
    setBookList((prevBook) => [...prevBook, newBook]);
  };

  const deleteBookHandler = (bookId) => {
    setBookList((prevBook) => prevBook.filter((book) => book.id !== bookId));
  };

  return (
    <div className={classes.container}>
      <header>
        {showForm && (
          <AddBookForm
            onNewBook={newBookHandler}
            onHideForm={hideFormHandler}
          />
        )}
        {!showForm && (
          <Header
            headerImg={<img src={BookStore} alt="books" />}
            headerContent="Welcome to Book Collector"
            textContent="All of your favorite books are already here"
          ></Header>
        )}
        {!showForm && <button onClick={addNewBookHandler}>ADD NEW BOOK</button>}
      </header>
      <Divider />
      <main>
        <BooksCard bookList={bookList} onDeleteBook={deleteBookHandler} />
      </main>
    </div>
  );
};

export default App;
