import { Button, withStyles } from "@material-ui/core";

import "./App.css";
import Header from "./components/Header";
import styles from "./components/Header/styles";
import ExpenseModal from "./components/ExpenseModal";
import { useState } from "react";

function App(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className={props.classes.root}>
      <Header />
      <section className={props.classes.expenseSection}>
        <Button
          onClick={() => setOpen(true)}
          color="secondary"
          variant="contained"
        >
          New Expense
        </Button>
        <ExpenseModal open={open} />
      </section>
    </div>
  );
}

export default withStyles(styles)(App);
