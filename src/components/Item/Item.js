import { Fragment } from "react";
import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <Fragment>
      <div className={classes["expense-item"]}>
        <div
          className={props.amount > 0 ? classes.income : classes.expense}
        ></div>
        <p className={classes["item-info"]}>{props.name}</p>
        <p className={classes["item-info"]}>{props.amount}</p>
      </div>
    </Fragment>
  );
};

export default Item;
