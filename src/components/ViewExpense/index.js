import React from 'react'
import {
    CardContent,
    Typography,
    Button

} from "@material-ui/core";
import axios from 'axios'

const deletePost = (id) => {
    axios.delete("http://localhost:5000/" + id)
        .then(res => console.log(res))
}

const viewExpense = (props) => {


    return (
        <CardContent>
            <br />
            <br />
            <Typography>{props.description}</Typography>
            <Typography>{props.amount} </Typography>
            <Typography>{props.date}</Typography>
            <Button onClick={() => deletePost(props.key)} color="primary" variant="contained">Delet Expense</Button>
        </CardContent>
    )
}
export default viewExpense