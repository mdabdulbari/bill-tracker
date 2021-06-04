import { Modal, withStyles } from "@material-ui/core";
import styles from "./styles";

const ExpenseModal = ({ classes }) => {
    return (
        <Modal
            open={true}
            // open={open}
            // onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.modal}
        >
            <div className={classes.modalBody}>asdfasdf</div>
        </Modal>
    );
};

export default withStyles(styles)(ExpenseModal);
