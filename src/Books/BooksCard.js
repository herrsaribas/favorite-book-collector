import React from "react";
import classes from "./BooksCard.module.css";
import BooksCardItem from "./BooksCardItem";
import Card from "../UI/Card";

const BooksCard = (props) => {
  return (
    <Card className={classes.booksCard}>
      {props.bookList.length > 0 &&
        props.bookList.map((bookItem) => (
          <BooksCardItem
            key={bookItem.id}
            id={bookItem.id}
            title={bookItem.title}
            author={bookItem.author}
            onDelete={props.onDeleteBook}
          />
        ))}
    </Card>
  );
};

export default BooksCard;
