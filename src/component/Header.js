import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AlbumIcon from '@material-ui/icons/Album';
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1,
        color: "white"
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <nav>
            <AppBar position="static" >
                <Toolbar >
                    <Typography className={classes.typographyStyles} variant="h4" >
                        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                            Kouhcner Philip
                            </Link>
                    </Typography>
                    <div>
                        <Link to="/" style={{ color: "white" }} >
                            <HomeIcon />
                        </Link>
                        <Link to="/portfolio" style={{ color: "white" }}>
                            <AlbumIcon />
                        </Link>
                        <Link to="/about" style={{ color: "white" }}>
                            <ContactMailIcon />
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </nav>
    );
};

export default Header;
