import { Button, withStyles } from "@material-ui/core";

import "./App.css";
import Header from "./components/Header";
import styles from "./components/Header/styles";
import ExpenseModal from "./components/ExpenseModal";

function App({ classes }) {
    return (
        <div className={classes.root}>
            <Header />
            <section className={classes.expenseSection}>
                <Button color="secondary" variant="contained">
                    New Expense
                </Button>
                <ExpenseModal />
            </section>
        </div>
    );
}

export default withStyles(styles)(App);
