import React, {useEffect, useState} from "react";
import {
    Icon,
    HeaderNav,
    HeaderContainer,
    HeaderMenu,
    MenuItem,
    ItemLink,
    Logo, HeaderMenuLogo
} from "./headerstyle";
import {IconButton} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FilterListIcon from "@material-ui/icons/FilterList";
import {Link as Scroll} from 'react-scroll';
import {Link} from "react-router-dom";

const Header = () => {

    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])


    return (
        <HeaderNav scrollNav={{scrollNav}}>
            <HeaderContainer>
                <HeaderMenuLogo>
                    <Logo> Haseeb</Logo>

                </HeaderMenuLogo>
                <HeaderMenu>
                    <Scroll to="projects" smooth={true}>
                        <MenuItem>
                            <ItemLink to='projects'>Projects</ItemLink>
                        </MenuItem>
                    </Scroll>
                    <Scroll to="stack" smooth={true}>
                        <MenuItem>
                            <ItemLink to='stack'>Stack</ItemLink>
                        </MenuItem>
                    </Scroll>
                    <MenuItem>
                        <ItemLink to='downloadcv'>Download CV</ItemLink>
                    </MenuItem>

                    <IconButton
                        onClick={() => window.open("https://github.com/raadhshenshahhaseeb?tab=repositories")}>
                        <Icon>
                            <GitHubIcon/>
                        </Icon>
                    </IconButton>

                    <IconButton onClick={() => window.open("https://www.linkedin.com/in/raadhhaseeb/")}>
                        <Icon>
                            <LinkedInIcon/>
                        </Icon>
                    </IconButton>
                    <IconButton>
                        <Icon>
                            <FilterListIcon/>
                        </Icon>
                    </IconButton>
                </HeaderMenu>

            </HeaderContainer>
        </HeaderNav>
    )
        ;
};

export default Header;