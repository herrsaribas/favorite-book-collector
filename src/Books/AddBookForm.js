import React, { useState } from "react";
import classes from "./AddBookForm.module.css";
import Header from "../UI/Header";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddBookForm = (props) => {
  const [bookInfo, setBookInfo] = useState({ title: "", author: "", id: "" });
  const [error, setError] = useState();

  const titleChangeHandler = (e) => {
    setBookInfo({ ...bookInfo, title: e.target.value });
  };
  const authorChangeHandler = (e) => {
    setBookInfo({ ...bookInfo, author: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      bookInfo.title.trim().length === 0 ||
      bookInfo.author.trim().length === 0
    ) {
      setError({
        title: "Input fields cannot be empty",
        message:
          "Please, fill up the 'Book Title' and 'Author' fields so the book can be added into the list. Please, try again.",
        action: "OK, I'LL TRY AGAIN!",
      });

      return;
    }

    const id = Math.random().toString();
    bookInfo.id = id;
    props.onNewBook(bookInfo);

    setBookInfo({ title: "", author: "" });
  };

  const errorHandler = () => {
    setError(null);
  };

  const clickCloseHandler = () => {
    props.onHideForm();
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          action={error.action}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.baseBackground}>
        <div>
          <Header
            headerContent="Add a new book"
            textContent="Write the title and author below"
          />
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.input}>
              <input
                className={classes.form__input}
                id="book-title"
                label="Book Title"
                placeholder="Book Title"
                onChange={titleChangeHandler}
                value={bookInfo.title}
              />
              <input
                className={classes.form__input}
                id="author"
                label="Author"
                placeholder="Author"
                onChange={authorChangeHandler}
                value={bookInfo.author}
              />
            </div>
            <div>
              <div className={classes.buttonModule}>
                <Button onClick={clickCloseHandler}>Close</Button>
                <Button>Add New Book</Button>
              </div>
            </div>
          </form>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default AddBookForm;
