import classes from "./Form.module.css";
import Input from "../Input/Input";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAmount, setEnteredAmount] = useState();
  const [isValid, setIsValid] = useState(false);

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    props.addItem({ name: enteredName, amount: enteredAmount });
    setEnteredName("");
    setEnteredAmount("");
    history.push("/stanje");
  };

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const amountInputHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  useEffect(() => {
    if (
      enteredName.trim().length > 1 &&
      isFinite(enteredAmount) &&
      enteredAmount !== 0
    ) {
      setIsValid(true);
    }
  }, [enteredName, enteredAmount]);

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        onChange={nameInputHandler}
        type='text'
        placeholder='Unesite naziv...'
        value={enteredName}
      />
      <Input
        onChange={amountInputHandler}
        type='number'
        placeholder='Unesite iznos...'
        value={enteredAmount}
      />
      <button disabled={!isValid} className={classes.button}>
        Dodaj
      </button>
    </form>
  );
};

export default Form;
