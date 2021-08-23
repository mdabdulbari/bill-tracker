import React from "react";
import { useState } from "react";
import { CardContent, Typography, Button } from "@material-ui/core";
import axios from "axios";
import EditExpense from "../EditExpense";

const ViewExpense = (props) => {
  const [data, setDate] = useState([""]);
  const [open, setOpen] = useState(false);

  const handleClose = (data) => {
    return setOpen(false);
  };

  const deletePost = (id) => {
    axios
      .delete("http://localhost:5000/" + id)
      .then((res) => console.log(res))
      .then(props.update);
  };

  const editPost = (id) => {
    fetch("http://localhost:5000/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDate(data);
      });
  };

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
      <Typography>₹{props.amount}/- </Typography>
      <Typography>On: {date}</Typography>
      <Button
        onClick={() => deletePost(props.id)}
        color="primary"
        variant="contained"
      >
        Delet Expense
      </Button>
      <Button
        onClick={() => editPost(props.id, setOpen(true))}
        color="primary"
        variant="contained"
      >
        Edit Expense
      </Button>
      <EditExpense
        amount={data.amount}
        description={data.description}
        date={data.date}
        id={data._id}
        open={open}
        close={handleClose}
        update={props.update}
      />
    </CardContent>
  );
};
export default ViewExpense;
