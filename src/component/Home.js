import React from 'react'
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { createMuiTheme } from '@material-ui/core/styles';

const Home = (props) => {

    const useStyles = makeStyles({
        root: {
            width: 700,
            marginTop: "50px",
            position: "absolut",
            flex: 1
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
            width: "300px",
            height: "400px",
            borderStyle: "solid",
            borderColor: "black"
        },
    });




    const theme = createMuiTheme({
        palette: {
            primary: {
                // light: will be calculated from palette.primary.main,
                main: '#d32f2f',
                // dark: will be calculated from palette.primary.main,
                // contrastText: will be calculated to contrast with palette.primary.main
            },
        },
        secondary: {
            light: '##5c6ac4',
            main: '#11cb5f',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#5c6ac4',
        },
    });
    const classes = useStyles();

    function CardHome() {
        return (
            <div style={{ display: "flex", justifyContent: "center" }} theme={theme}>
                <Card className={classes.root} style={{ backgroundColor: "#898da3" }} position="absolut" >
                    <CardContent>
                        <Typography className={classes.title} color="textPrimary" gutterBottom>
                            {props.title}
                        </Typography>
                        <Typography variant="h6" component="h3">
                            {props.subheader}
                        </Typography>
                        <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
                            <Typography variant="body2" component="p" style={{ fontSize: "15px" }} color="primary">
                                {props.bio}
                                <br />
                            </Typography>
                        </div>
                        <div style={{ display: "flex", textAlign: "center", marginLeft: "10px" }}>
                            < CardMedia
                                className={classes.pos}
                                image={props.img}
                                title="Paella dish"
                            />
                        </div>
                    </CardContent>
                </Card >

            </div>

        )

    }


    return (
        <Grid container direction="column">
            <Grid item container>
                <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8} style={{ margin: "10px" }}>
                    <CardHome />
                </Grid>
                <Grid item xs={false} sm={2} />
            </Grid>
        </Grid>
    )
}

export default Home


