import { Modal, withStyles } from "@material-ui/core";
import styles from "./styles";

const ExpenseModal = ({ classes }) => {
   
   const onChangeAmount=(e)=>{
       console.log(e.target.value)
   }
  
   const onChangeDescprtion=(e)=>{
    console.log(e.target.value)
  
}

const handelSubmit =(e)=>{
    e.preventDefault()
   
}
   
    return (
        <Modal
            open={true}
            // open={open}
            // onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.modal}
        >
            <div className={classes.modalBody}>

          

<form>
        <label>Amount: </label> <input type='text' onChange={onChangeAmount}/> <br/>
        <label>Descprtion: </label> <input type='text' onChange={onChangeDescprtion}/><br/>
        <label>Date: </label> <input type='text' /><br/>
        <button onChange={handelSubmit}>Submit</button>
</form>



            </div>
        </Modal>
    );
};

export default withStyles(styles)(ExpenseModal);
