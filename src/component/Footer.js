import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const Footer = () => {

    function Copyright() {
        return (
            <Typography variant="body2" color="textPrimary">
                {'&copy;  Flex-FullStack Bootcamp, Inc. '}
                <Link color="inherit" href="https://github.com/PhilipK-webdev">
                    My Github
      </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        },
        main: {
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(2),
        },
        footer: {
            padding: theme.spacing(3, 2),
            marginTop: 'auto',
            backgroundColor:
                theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        },
    }));
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <footer footer="true" className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        Made By Philip Kouchner
                    </Typography>
                    <Copyright />
                </Container>
            </footer>
        </div >
    );
}

export default Footer


