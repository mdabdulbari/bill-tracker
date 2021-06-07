import { Button, Input, Modal, withStyles, TextField } from "@material-ui/core";
import { useState } from "react";

import styles from "./styles";

const ExpenseModal = (props) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
    console.log(amount);
  };

  const onChangeDescprtion = (e) => {
    setDescription(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(amount);
    console.log(description);
  };

  return (
    <Modal
      open={true}
      // open={open}
      // onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={props.classes.modal}
    >
      <div className={props.classes.modalBody}>
        <form>
          <TextField
            id="filled-basic"
            label="Amount"
            type="text"
            onChange={onChangeAmount}
          />
          <TextField
            id="filled-basic"
            label="Description"
            type="text"
            onChange={onChangeDescprtion}
          />
          <Button variant="contained" color="secondary" onClick={handelSubmit}>
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default withStyles(styles)(ExpenseModal);
