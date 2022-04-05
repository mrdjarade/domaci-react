import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={classes.input}
      onChange={props.onChange}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
};

export default Input;
