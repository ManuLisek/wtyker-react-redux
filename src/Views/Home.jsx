import React from 'react';
import Button from '../Components/Button';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import size from '../styles/breakpoints';
import { slideLeft, slideRight, slideDown } from '../styles/animations';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
overflow: hidden;
@media (max-width: ${size.md}){
    flex-direction: column;
}
`;

const ImageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
width: 55%;
height: 267px;
animation: ${slideRight} 2s linear;
@media (max-width: ${size.md}){
    align-items: center;
    width: 50%;
    animation: ${slideDown} 2s linear;
}
`;

const Image = styled.img`
width: 400px;
height: auto;
@media (max-width: ${size.lg}){
    width: 280px;
}
`;

const IntroContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding-bottom: 5px;
width: 45%;
animation: ${slideLeft} 2s linear;
@media (max-width: ${size.md}){
    align-items: center;
    text-align: center;
    width: 50%;
    animation: ${slideDown} 2s linear;
}
`;

const Logo = styled.img`
    width: 200px;
    height: 125px;
@media (max-width: ${size.lg}){
    width: 150px;
    height: 94px;
}
`;

const Description = styled.p`
min-height: 25px;
`;

const Home = () => {
    
  return (
    <Container>
      <ImageContainer>
        <Image src='https://res.cloudinary.com/dorwcwygq/image/upload/v1636226767/wtyker/home_fvomsv.webp' alt="shopping list"/>
      </ImageContainer>
      <IntroContainer>
        <Logo src='https://res.cloudinary.com/dorwcwygq/image/upload/v1636226766/wtyker/Wtyker_1_ln9ki6.png' alt="big Wtyker logo"/>
        <Description>Zrób zakupy we Wtykerze</Description>
        <Description>w wybuchowo niskich cenach!</Description>
        <Link to='/products'>
          <Button>Zacznij zakupy</Button>
        </Link>
      </IntroContainer>
    </Container>
  );
};

export default Home;