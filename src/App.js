import { useState } from "react";
import { Button, withStyles } from "@material-ui/core";

import "./App.css";
import Header from "./components/Header";
import styles from "./components/Header/styles";
import ExpenseModal from "./components/ExpenseModal";

function App(props) {
  const [amount, setamount] = useState("");

  console.log(props);
  return (
    <div className={props.classes.root}>
      <Header />
      <section className={props.classes.expenseSection}>
        <Button color="secondary" variant="contained">
          New Expense
        </Button>
        <ExpenseModal amount={console.log(amount)} />
      </section>
    </div>
  );
}

export default withStyles(styles)(App);
