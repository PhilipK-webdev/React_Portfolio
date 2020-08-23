import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

export default function CarouselSlide(props) {
    const { backgroundColor, git, gitLive, image, name } = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            backgroundColor,
            borderRadius: 5,
            padding: '75px 50px',
            margin: '0px 25px',
            width: '500px',
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
        },
        root: {
            width: 700,
            marginTop: "50px",
            position: "fixed",
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
            width: "500px",
            height: "250px",
            borderStyle: "solid",
            borderColor: "red"
        },
    }));

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <div>
                    <h1 style={{ color: "blue", textDecoration: "underline" }}>{name}</h1>
                    <div style={{ display: "flex", textAlign: "center", margin: "10px", justifyContent: "flex-end" }}>
                        <Link color="inherit" href={git}>
                            <i
                                className="fa fa-github" style={{ fontSize: "36px" }}></i>
                        </Link>
                        <br />
                        <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                            <Link color="inherit" href={gitLive} >
                                Live
                 </Link>
                        </div>


                    </div>
                    < CardMedia
                        className={classes.pos}
                        image={image}
                        title="Paella dish"
                    />
                </div>
            </CardContent>
        </Card>
    );
}
