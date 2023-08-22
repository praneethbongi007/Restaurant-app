import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef,useState } from "react";
const MealItemForm = (props) => {
  const[amountValid,setIsAmountValid]= useState(true)
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsAmountValid(false)
      return;
    }
    props.onAddToCart(enteredAmountNumber)
  };
  const amountInputRef = useRef();
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountValid && <p>Please enter valid amount from (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
