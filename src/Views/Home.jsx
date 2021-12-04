import React from 'react';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import size from '../styles/breakpoints';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
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
@media (max-width: ${size.md}){
    align-items: center;
    width: 50%;
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
width: 45%;
@media (max-width: ${size.md}){
    align-items: center;
    text-align: center;
    width: 50%;
}
`;

const Logo = styled.img`
    width: 200px;
    height: auto;
@media (max-width: ${size.lg}){
    width: 150px;
}
@media (max-height: ${size.md}){
    width: 140px;
}
`;

const Home = () => {
    
  return (
    <Container>
      <ImageContainer>
        <Image src='https://res.cloudinary.com/dorwcwygq/image/upload/v1636226767/wtyker/home_fvomsv.webp' alt="shopping list" />
      </ImageContainer>
      <IntroContainer>
        <Logo src='https://res.cloudinary.com/dorwcwygq/image/upload/v1636226766/wtyker/Wtyker_1_ln9ki6.png' alt="big Wtyker logo" height='140' width='88'/>
        <p>Zrób zakupy we Wtykerze</p>
        <p>w wybuchowo niskich cenach!</p>
        <Link to='/products'>
          <Button>Zacznij zakupy</Button>
        </Link>
      </IntroContainer>
    </Container>
  );
};

export default Home;