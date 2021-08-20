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
import { useState} from "react";
// import { useEffect} from "react";
import ViewExpense from "./components/ViewExpense";

function App(props) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  const handelViewExp = () => {
    fetch("http://localhost:5000/data").then(data => data.json()).then(result => setData(result))
  }

  // useEffect(() => {
  //   fetch("http://localhost:5000/data")
  //   .then(res => {
  //     return res.json()
  //   }).then( data => {
  //     return setData(data)})
  // }, [])
 
  const handleClose = (data) => {
    return setOpen(false);
  };

  const myData =  data && data.map(data => <ViewExpense amount={data.amount} description={data.description} date={data.date} key={data._id} id={data._id}/>) 

//console.log(myData.amount)
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
                  <Typography> View Expense Here </Typography>
                  {data && myData}
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => handelViewExp()}
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
