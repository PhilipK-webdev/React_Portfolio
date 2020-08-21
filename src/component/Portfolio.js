import React from "react";
import CardPortfolio from './CardPortfolio'
import { Grid } from "@material-ui/core";
import imageGroup from '../images/groupProject.PNG';
import imageGif from '../images/Gif-project.PNG';
import imageMySQL from '../images/mySQL.PNG';
import imageWeather from '../images/weather.PNG';
import imageWorkDay from '../images/work-day.PNG';


const Portfolio = () => {
    const arrayImg = [];
    arrayImg.push(imageGif);
    arrayImg.push(imageGroup);
    arrayImg.push(imageMySQL);
    arrayImg.push(imageWeather);
    arrayImg.push(imageWorkDay);

    const displayCard = (img, index) => {
        return (
            <Grid item xs={12} sm={4} key={index}>
                <CardPortfolio img={img} />
            </Grid>
        )
    }
    return (
        <Grid container spacing={2}>
            {arrayImg.map((img, index) => displayCard(img, index))}
        </Grid>

    );
}

export default Portfolio;
