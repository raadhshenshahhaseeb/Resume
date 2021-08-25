import React from "react";
import Carditem from "./Cards/carditem";
import Card from "./Cards/card"
import {makeStyles} from "@material-ui/core";
import imx from '../../assets/bimg.jpg';
import ProjectsData from "./Cards/cardsdata"


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
            flex: "1 0 20%",
            margin: '3%',
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


export default function Projects() {
    const classes = useStyles();
    const projectsList = ProjectsData.map((projects) => <Carditem key={projects.id} id={projects.id}
                                                                  title={projects.Projects}
                                                                  stack={projects.Stack}
                                                                  description={projects.Description}
                                                                  link={projects.Link} Img={projects.Img}/>);
    return (

        <div className={classes.root} id={"projects"}>
            <h1 className={classes.heading}>Projects</h1>
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