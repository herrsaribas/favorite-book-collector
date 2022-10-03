import React from "react";
import Button from "../UI/Button";
import classes from "./BookCardItem.module.css";
import Card from "../UI/Card";
import BookItem from "../assets/book-item.png";

const BookCardItem = (props) => {
  const clickHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <Card className={classes.bookItem}>
      <div>
        <img src={BookItem} />
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.author}</p>
      </div>
      <div>
        <Button className={classes.button_outline} onClick={clickHandler}>
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default BookCardItem;
