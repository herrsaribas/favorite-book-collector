import React from "react";
import Button from "../UI/Button";
import classes from "./BookCardItem.module.css";
import Card from "../UI/Card";

const BookCardItem = (props) => {
  const clickHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <Card className={classes.bookItem}>
      <div></div>
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
