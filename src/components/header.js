import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import Twittericon from '../components/twittericon'
import Githubicon from '../components/githubicon'

const Wrapper = styled.div`
position: fixed;
width: 100%;
z-index: 30;
font-family: 'Montserrat', sans-serif;
font-size: 15px;
a {
    color: white;
    text-decoration: none;
  }

`
const WrapperInner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  height: 50px;
  background-color: black;
`

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  margin: 0 0;

  @media screen and (max-width:768px) {
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  right: 0px;
  height: 88vh;
  width: 40%;
  top: 6vh;
  background-color: black;
  transform: translateX(100%);
  transition: transform 0.5s ease-in;

  &.nav-active {
    transform: translateX(0%);
  }
}
`
const MenuList = styled.li`
  margin: 15px 15px;
  @media screen and (max-width:768px) {
  opacity: 0;

  @keyframes navLinkFade {
    from{
        opacity: 0;
        transform: translateX(50px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
  };
}
`
const MenuBurger = styled.div`
  display: none;

  div {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px;
  }

  @media screen and (max-width:768px) {
  display: block;
  cursor: pointer;

}
`

const Line = styled.div`
  
  @keyframes Rotate {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(330deg);
    }
  };
`

const navSlide = () => {
  const menu = document.querySelector('#b')
  const menuLists = document.querySelectorAll('li')
  const burgers = document.querySelectorAll('.burger')
  console.log(burgers)

  menu.classList.toggle('nav-active');

  burgers.forEach((burger) => {
    if (burger.style.animation) {
      burger.style.animation = '';
    } else {
      burger.style.animation = 'Rotate 0.6s ease forwards';
    }
  });

  menuLists.forEach((list, index) => {
    if (list.style.animation) {
      list.style.animation = '';
    } else {
      list.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.4}s`
    }
  });
};

export default () => (
  <Wrapper>
    <WrapperInner>
      <div>
        <a href="/">HIROKUNI HONDA</a>
      </div>
      <Menu id="b">
        <MenuList><a href="">ABOUT</a></MenuList>
        <MenuList><a href="http://cadillacs-in-our-dreams.surge.sh/">BLOG</a></MenuList>
        <MenuList><a href="">PICTURE</a></MenuList>
        <Githubicon/>
      </Menu>
      <MenuBurger id="a" onClick={navSlide}>
        <Line className="burger"></Line>
        <Line className="burger"></Line>
        <Line className="burger"></Line>
      </MenuBurger>
    </WrapperInner>
  </Wrapper>
)