import { Button, withStyles, CardContent, Container, Grid, Typography, Card, CardActions } from "@material-ui/core";

import "./App.css";
import Header from "./components/Header";
import styles from "./components/Header/styles";
import ExpenseModal from "./components/ExpenseModal";
import { useState } from "react";


function App(props) {
  const [open, setOpen] = useState(false);

  const handleClose = (data) => {
    return setOpen(false)
  }

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
                    New Expense
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card>
                <CardContent>
                  <Typography>View Expense</Typography>
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
                    New Expense
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
                    New Expense
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
