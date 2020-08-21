import React from 'react'
import { Grid } from "@material-ui/core";
import CardHome from './CardHome';

const Home = ({ title, subheader, img, bio, avatar }) => {
    return (
        <Grid container direction="column">
            <Grid item container>
                <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8} style={{ margin: "10px" }}>
                    <CardHome title={title} subheader={subheader} img={img} bio={bio} avatar={avatar} />
                </Grid>
                <Grid item xs={false} sm={2} />
            </Grid>
        </Grid>
    )
}

export default Home
