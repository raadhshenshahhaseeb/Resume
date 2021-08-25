import React, {useEffect, useState} from "react";
import {Collapse, CssBaseline, IconButton, makeStyles} from "@material-ui/core";
import imx from '../../../assets/background.jpg';
import Header from "../header/header";
import iclasses from "../Background/about.module.css"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Link as Scroll} from 'react-scroll';


const useStyles = makeStyles((theme) => ({

            root: {
                minHeight: '100vh',
                backgroundImage: `url(${imx})`,
                // backgroundColor: '#fff',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                overflow: "hidden",
                position: "relative",

            },
            highlighttext: {
                color: 'gold',
                fontWeight: 'bold',
            },
            downIcon: {
                minHeight: '50vh',
                fontSize: '4rem',
                color: 'gold',
            },
            title: {
                fontSize: '1rem',
            },
        }
    ))
;
export default function RootBackground() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, [])
    return (<div className={classes.root}>
            <CssBaseline/>

            <div>
                <Collapse
                    in={checked}
                    {...(checked ? {timeout: 1500} : {})}
                    collapsedHeight={30}
                >
                    <div className={iclasses.summary}>
                        <h2 className={classes.title}>Hi,Thank you for checking out my<span
                            className={classes.highlighttext}> Resume</span></h2>
                        <p>
                            An entry level full stack developer in <span className={classes.highlighttext}>Love </span>️with
                            coding.
                            <br/>Bachelors in Software Engineering.
                            <br/>5 years of entrepreneurial experience in other sector.
                            <br/>Experience with cross-functional team management.
                            <br/>Coming back to do what I am most <span
                            className={classes.highlighttext}>Passionate</span> about.

                        </p>
                        <Scroll to="projects" smooth={true}>
                            <IconButton>
                                <ExpandMoreIcon className={classes.downIcon}></ExpandMoreIcon>
                            </IconButton>
                        </Scroll>
                    </div>
                </Collapse>
            </div>

        </div>
    );
}
