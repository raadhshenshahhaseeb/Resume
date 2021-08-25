import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'


export const HeaderNav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: sticky;
  top: 0;
  background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
  //background: white;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 1100px;

`
export const Logo = styled(LinkR)`
  color: gold;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  margin-left: 50%;
`
export const HeaderMenuLogo = styled.ul`

  display: inline-flex;
  justify-content: space-evenly;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HeaderMenu = styled.ul`

  display: flex;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MenuItem = styled.li`
  height: 80px;
`
export const ItemLink = styled(LinkR)`
  color: #fff;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 95%;
  font-size: medium;
  cursor: pointer;
  font-weight: normal;

  &:active {
    border-bottom: 3px solid #fff;
    margin-bottom: 5px;
    font-weight: bolder;
  }
`


export const Icon = styled.ul`
  color: #fff;
`