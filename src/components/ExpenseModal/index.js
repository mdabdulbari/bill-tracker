import {
  Button,
  Modal,
  withStyles,
  TextField,
  Divider,
  Typography,
} from "@material-ui/core";

import { useState } from "react";
import styles from "./styles";
import axios from "axios"

const ExpenseModal = (props) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");



  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const onClose = (e) => {
    return true
  };

  const onChangeDescprtion = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/data', {
      amount,
      description,
      date
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }).then(() => props.close())
  };

  return (
    <Modal
      open={props.open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={props.classes.modal}
    >
      <div className={props.classes.modalBody}>
        <Typography variant="h5" component="h2">
          Add Expense
        </Typography>
        <form>
          <TextField
            id="filled-basic"
            label="Amount"
            type="text"
            onChange={onChangeAmount}
          />{" "}
          <Divider />
          <TextField
            id="filled-basic"
            label="Description"
            type="text"
            onChange={onChangeDescprtion}
          />
          <Divider />
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue=""
            className={props.classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onChangeDate}
          />
          <Divider />
          <Button variant="contained" color="secondary" onClick={handelSubmit}>
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default withStyles(styles)(ExpenseModal);
