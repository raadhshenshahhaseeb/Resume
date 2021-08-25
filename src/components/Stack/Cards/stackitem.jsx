import React from "react";
import {Button, CardActions, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    liContainer: {
        listStyleType: "none",
    },
    root: {
        flex: "1",
        display: 'flex',
        justifyContent: 'space-between',
        margin: "5%",
        minWidth: 200,
        height: 300,
        flexDirection: 'column',
        background: "rgba(0,0,0,0.5)",
        alignItems: 'center',
        textAlign: 'center justify',


    },
    media: {

        width: '100%',
        height: '80%',
        aspectRatio: 1,
        alignContent: 'center',
    },
    title: {
        fontFamily: "Nunito",
        fontWeight: "bolder",
        fontSize: '1.3rem',
        color: 'gold',
    },

});

export default function Stackitem(props) {
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
                </CardContent>
            </Card>
        </li>
    );

}