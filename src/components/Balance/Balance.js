import classes from "./Balance.module.css";

const Balance = (props) => {
  return (
    <div className={classes["balance-container"]}>
      <h2 className={classes.heading}>
        Ukupno: {(props.data.income + props.data.expenses).toLocaleString()} RSD
      </h2>
      <div className={classes["balance-container--cards"]}>
        <div>
          <h2 className={classes.heading}>Prihodi:</h2>
          <p className={classes.income}>
            {props.data.income.toLocaleString()} RSD
          </p>
        </div>
        <div>
          <h2 className={classes.heading}>Rashodi:</h2>
          <p className={classes.expense}>
            {props.data.expenses.toLocaleString()} RSD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
