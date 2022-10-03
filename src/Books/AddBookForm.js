import React, { useState } from "react";
import classes from "./AddBookForm.module.css";
import Header from "../UI/Header";
import ErrorDialog from "../UI/ErrorDialog";
import Card from "../UI/Card";
import Button from "../UI/Button";

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

    if (
      bookInfo.title.trim().length === 0 ||
      bookInfo.author.trim().length === 0
    ) {
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
    <Card className={classes.baseBackground}>
      <div>
        <Header headerContent="Hello" />
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
              <Button>Add new Book</Button>
            </div>
          </div>
        </form>
      </div>
      {openErrorDialog && (
        <ErrorDialog open={openErrorDialog} dialogState={errorDialogHandler} />
      )}
    </Card>
  );
};

export default AddBookForm;
