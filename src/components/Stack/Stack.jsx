import React from "react";
import Stackitem from "./Cards/stackitem";
import Card from "./Cards/card"
import {makeStyles} from "@material-ui/core";
import imx from '../../assets/bim.jpg';
import ProjectsData from "./Cards/stackdata"


const useStyles = makeStyles((theme) => ({
        pageHeading: {

            height: "100px",
            justifyContent: "center",
            alignitems: "center",
            zindex: " 10",
            background: "none",
        },

        root: {
            minHeight: '100vh',
            display: 'flex',
            backgroundImage: `url(${imx})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            // justifyContent: "space-between",
        },
        cardsContainer: {
            marginTop: '7%',
            display: 'flex',
            height: "100%",
        },
        ulContainer: {

            display: "flex",
            flexWrap: "wrap",
            justifyContent: 'center',
            alignItems: 'center',

        },
        heading: {
            flexWrap: "wrap",
            textAlign: "center",
            width: '100%',
            top: '0',
            fontWeight: "bold",
            fontSize: "3rem",
            color: 'Gold',
        },
    }))
;


export default function Stack() {
    const classes = useStyles();
    const projectsList = ProjectsData.map((projects) => <Stackitem key={projects.stack}
                                                                   title={projects.Stack}
                                                                   link={projects.Link} Img={projects.Img}/>);
    return (

        <div className={classes.root} id={"stack"}>
            <h1 className={classes.heading}>Stack and Tools</h1>
            <div className={classes.cardsContainer}>
                <Card>
                    <ul className={classes.ulContainer}>{projectsList}</ul>
                    {/*<Card props={ProjectsData[0]} />*/}
                </Card>
            </div>
        </div>
    )
        ;

}