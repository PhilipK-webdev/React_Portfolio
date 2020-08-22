import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AlbumIcon from '@material-ui/icons/Album';
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';

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
                            <Tooltip title="Home" arrow>
                                <HomeIcon />
                            </Tooltip>
                        </Link>
                        <Link to="/projects" style={{ color: "white" }}>
                            <Tooltip title="Projects" arrow>
                                <AlbumIcon />
                            </Tooltip>
                        </Link>
                        <Link to="/about" style={{ color: "white" }}>
                            <Tooltip title="Contact" arrow>
                                <ContactMailIcon />
                            </Tooltip>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </nav>
    );
};

export default Header;
