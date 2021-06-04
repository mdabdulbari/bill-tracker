import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => (
    <AppBar position="static">
        <Toolbar variant="dense">
            <Typography variant="h4" color="inherit">
                Bill Tracker
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Header;
