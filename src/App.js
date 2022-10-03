import React, { useState } from "react";
import classes from "./App.module.css";
import Header from "./UI/Header";
import Divider from "./UI/Divider";
import BooksCard from "./Books/BooksCard";
import AddBookForm from "./Books/AddBookForm";
import BookStore from "./assets/book-store.jpg";
import Card from "./UI/Card";
import Button from "./UI/Button";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [bookList, setBookList] = useState([]);

  const addNewBookHandler = () => {
    setShowForm(true);
    setShowCard(true);
    // console.log("clicked");
  };

  const hideFormHandler = () => {
    setShowForm(false);
    setShowCard(false);
  };

  const newBookHandler = (newBook) => {
    setBookList((prevBook) => [...prevBook, newBook]);
  };

  const deleteBookHandler = (bookId) => {
    setBookList((prevBook) => prevBook.filter((book) => book.id !== bookId));
  };

  return (
    <Card>
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
        {!showForm && <Button onClick={addNewBookHandler}>ADD NEW BOOK</Button>}
      </header>
      <Divider />
      <main>
        {showCard && (
          <BooksCard bookList={bookList} onDeleteBook={deleteBookHandler} />
        )}
      </main>
    </Card>
  );
};

export default App;
