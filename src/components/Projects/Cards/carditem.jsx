import React from "react";
import {Button, CardActions, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    liContainer: {
        listStyleType: "none",
    },
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: "5%",
        maxWidth: 300,
        flexDirection: 'column',
        background: "rgba(0,0,0,0.5)",
    },
    media: {
        height: 200,
    },
    title: {
        fontFamily: "Nunito",
        fontWeight: "bolder",
        fontSize: '1.3rem',
        color: 'gold',
    },
    stack: {
        fontFamily: "Nunito",
        fontWeight: "bold",
        fontSize: '0.7rem',
        color: 'gold',
    },
    description: {
        fontFamily: "Nunito",
        fontWeight: "normal",
        fontSize: '0.7rem',
        color: '#fff',
    },
    buttons: {
        fontFamily: "Nunito",
        fontWeight: "normal",
        fontSize: '0.7rem',
        color: 'gold',
    },
});

export default function Carditem(props) {
    const classes = useStyles();
    return (<li className={classes.liContainer}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={props.Img}
                    title={props.id}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component={"h2"} className={classes.title}>
                        {props.title}
                    </Typography>
                    <h4 className={classes.stack}>{props.stack}</h4>
                    <p className={classes.description}>{props.description}</p>
                </CardContent>
                <CardActions>
                    <Button size="small" className={classes.buttons} href={props.link}>
                        GitHub
                    </Button>
                    <Button className={classes.buttons} size="small">
                        Demo/Video
                    </Button>
                </CardActions>
            </Card>
        </li>
    );

}