import {
  Button,
  Modal,
  withStyles,
  TextField,
  Divider,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";
import { useState } from "react";
import styles from "./styles";
import axios from "axios";
import API_BASE_URL from "../../API_config";

const EditExpense = (props) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const onClose = (e) => {
    return true;
  };

  const onChangeDescprtion = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post(API_BASE_URL + "/" + props.id, {
        amount,
        description,
        date,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(props.update)
      .then(() => props.close());
  };

  return (
    <Grid container>
      {props.id && (
        <Modal
          open={props.open}
          onClose={onClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={props.classes.modal}
        >
          <Grid>
            <Card>
              <CardContent align="center">
                <div className={props.classes.modalBody}>
                  <Typography variant="h5" component="h2" align="center">
                    Edit Expense
                  </Typography>
                  <form>
                    <TextField
                      id="filled-basic"
                      label="Amount"
                      defaultValue={props.amount}
                      type="number"
                      required
                      onChange={onChangeAmount}
                    />{" "}
                    <Divider />
                    <TextField
                      id="filled-basic"
                      label="Description"
                      defaultValue={props.description}
                      type="text"
                      required
                      onChange={onChangeDescprtion}
                    />
                    <Divider />
                    <TextField
                      id="date"
                      label="Date"
                      type="date"
                      required
                      className={props.classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={onChangeDate}
                    />
                    <Divider />
                    <br />
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handelSubmit}
                    >
                      Submit
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Modal>
      )}
    </Grid>
  );
};

export default withStyles(styles)(EditExpense);
