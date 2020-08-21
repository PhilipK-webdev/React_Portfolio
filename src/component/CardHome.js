import React from 'react'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Card from "@material-ui/core/Card";
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import { Avatar, IconButton, CardMedia } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const CardHome = (props) => {
    const { title, subheader, img, bio, avatar } = props;
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="name">
                        <span>{avatar}</span> </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <CardMembershipIcon />
                    </IconButton>
                }
                title={title}
                subheader={subheader}
            />
            <CardMedia style={{ height: "400px", width: "auto" }} image={img} />
            <CardContent>
                <Typography variant="body2" component="p">
                    {bio}
                </Typography>
            </CardContent >
        </Card>
    )
}

export default CardHome





