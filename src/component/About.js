import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';


const About = () => {

    const useStyles = makeStyles({
        root: {
            display: 'flex',
            justifyContent: "center",
            alignContent: "center",
            marginTop: "50px",
            marginLeft: "40px",
            marginBottom: "50px"
        },
        card: {

            // height: "290px",
            width: "250px",
            marginTop: "10px",
        }
    });

    const classes = useStyles();



    return (
        <Container maxWidth="sm" >
            <Card className={classes.root} >
                <div className={classes.root}>
                    <Link href="https://www.linkedin.com/in/philip-kouchner-886264100/" style={{ marginRight: "15px" }}>
                        <LinkedInIcon fontSize={"large"} />
                    </Link>
                    <Link href="mailto:philipk179@gmail.com" label={"philipk179@gmail.com"} style={{ marginRight: "15px" }}>
                        <MailIcon fontSize={"large"} />
                    </Link>
                    <Link href="https://github.com/PhilipK-webdev" style={{ marginRight: "15px" }} >
                        <GitHubIcon fontSize={"large"} />
                    </Link>
                </div>
            </Card>

        </Container>

    );
}

export default About

