import React from "react";
import { CardContent, Typography, Button } from "@material-ui/core";
import axios from "axios";

const deletePost = (id) => {
  axios.delete("http://localhost:5000/" + id).then((res) => console.log(res));
};

const viewExpense = (props) => {
  let dbdate = props.date.split("").splice(0, 10);
  let dd = dbdate.splice(8);
  let mm = dbdate.splice(4);
  let yyyy = dbdate.splice(0);
  let output = dd + mm + yyyy;
  const date = output.replace(/,/g, "");

  return (
    <CardContent>
      <br />
      <Typography>{props.description}</Typography>
      <Typography>{props.amount} </Typography>
      <Typography>{date}</Typography>
      <Button
        onClick={() => deletePost(props.id)}
        color="primary"
        variant="contained"
      >
        Delet Expense
      </Button>
    </CardContent>
  );
};
export default viewExpense;
