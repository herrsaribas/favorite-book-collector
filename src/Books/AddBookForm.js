import React, { useState } from "react";
import classes from "./AddBookForm.module.css";
import Header from "../UI/Header";
import ErrorDialog from "../UI/ErrorDialog";

const AddBookForm = (props) => {
  const [bookInfo, setBookInfo] = useState({ title: "", author: "", id: "" });
  const [openErrorDialog, setOpenErrorDialog] = useState(false);

  const titleChangeHandler = (e) => {
    setBookInfo({ ...bookInfo, title: e.target.value });
  };
  const authorChangeHandler = (e) => {
    setBookInfo({ ...bookInfo, author: e.target.value });
  };

  const errorDialogHandler = (isOpen) => {
    setOpenErrorDialog(isOpen);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (bookInfo.title.length === 0 || bookInfo.author.length === 0) {
      errorDialogHandler(true);
      return;
    }

    const id = Math.random().toString();
    bookInfo.id = id;
    props.onNewBook(bookInfo);

    setBookInfo({ title: "", author: "" });
  };

  const clickCloseHandler = () => {
    props.onHideForm();
  };

  return (
    <div className={classes.container}>
      <div>
        <Header headerContent="Hello" />
        <form className={classes.form} onSubmit={submitHandler}>
          <div>
            <input
              id="book-title"
              label="Book Title"
              placeholder="Eloquent JavaScript"
              onChange={titleChangeHandler}
            />
          </div>
          <div>
            <input
              id="author"
              label="Author"
              placeholder="Marijn Haverbeke"
              onChange={authorChangeHandler}
            />
          </div>
          <div>
            <div>
              <button onClick={clickCloseHandler}>Close</button>
            </div>
            <div>
              <button>Add new Book</button>
            </div>
          </div>
        </form>
      </div>
      {openErrorDialog && (
        <ErrorDialog open={openErrorDialog} dialogState={errorDialogHandler} />
      )}
    </div>
  );
};

export default AddBookForm;
