import {
  Button,
  withStyles,
  CardContent,
  Container,
  Grid,
  Typography,
  Card,
  CardActions,
} from "@material-ui/core";

import "./App.css";
import Header from "./components/Header";
import styles from "./components/Header/styles";
import ExpenseModal from "./components/ExpenseModal";
import { useState } from "react";

function App(props) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("Click on View Expense to View");

  fetch("http://localhost:5000/data");

  const handleClose = (data) => {
    return setOpen(false);
  };

  return (
    <div className={props.classes.root}>
      <Header />
      <Container>
        <Grid container className={props.classes.root}>
          <Grid container>
            <Grid item sm={4}>
              <Card>
                <CardContent>
                  <Typography>Add New Expense</Typography>
                  <section className={props.classes.expenseSection}>
                    <ExpenseModal open={open} close={handleClose} />
                  </section>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => setOpen(true)}
                    color="secondary"
                    variant="contained"
                  >
                    Add Expense
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card>
                <CardContent>
                  <Typography>View Expense</Typography>
                  <Typography>{data}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => console.log("You are viewing expense")}
                    color="secondary"
                    variant="contained"
                  >
                    View Expense
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card>
                <CardContent>
                  <Typography>Total Expense for the Month</Typography>
                  <section className={props.classes.expenseSection}>
                    <ExpenseModal open={open} close={handleClose} />
                  </section>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => setOpen(true)}
                    color="secondary"
                    variant="contained"
                  >
                    View Total Expense
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withStyles(styles)(App);
