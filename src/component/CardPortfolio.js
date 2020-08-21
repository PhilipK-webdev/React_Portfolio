import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


const CardPortfolio = ({ img }) => {
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Contemplative Reptile"
                />
            </CardActionArea>
            <CardActions>
                <Link to="https://github.com/PhilipK-webdev/Gif-search-app" onClick={(e) => e.preventDefault()}>
                    Link
  </Link>
                <Button size="small" color="primary">
                    <Link to="https://philipk-webdev.github.io/Gif-search-app/" onClick={(e) => e.preventDefault()}>
                        Link
  </Link>
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardPortfolio

