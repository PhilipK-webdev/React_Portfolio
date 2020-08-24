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
                        <Link to="/" >
                            <Tooltip title="Home" arrow >
                                <HomeIcon style={{ color: "white", marginRight: "15px" }} />
                            </Tooltip>
                        </Link>
                        <Link to="/projects">
                            <Tooltip title="Projects" arrow >
                                <AlbumIcon style={{ color: "white", marginRight: "15px" }} />
                            </Tooltip>
                        </Link>
                        <Link to="/about">
                            <Tooltip title="Contact" arrow >
                                <ContactMailIcon style={{ color: "white" }} />
                            </Tooltip>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </nav>
    );
};

export default Header;
