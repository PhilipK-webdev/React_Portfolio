import React from 'react'
import { Grid } from "@material-ui/core";
import CardHome from './CardHome';
import images from '../images/MySelf.jpg'


const Home = () => {

    const title = "Kouchner Philip";
    const subheader = "Full Stack Web Developer";
    const img = images;
    const bio = "Currently studying at Berkley Extension as Full-Stack Web Developer.Looking for my new challenge in frontend, backend or Both. I'm a fast learner with excellent background in computers I like to learn new technologies and expand my knowledge in a variety of fields";
    const avatar = "😎";
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
