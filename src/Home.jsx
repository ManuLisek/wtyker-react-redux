import React from 'react';
import {Link} from 'react-router-dom';
// import logo from './images/Wtyker(1).png';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`;

const ImageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
width: 55%;
`;

const Image = styled.img`
width: 400px;
height: auto;
`;

const IntroContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
width: 45%;
`;

const Logo = styled.img`
    width: 200px;
    height: auto;
`;

const Button = styled.div`
background-color: #007065;
border: none;
font-weight: bold;
color: white;
padding: 10px 15px;
border-radius: 5px;
margin-top: 12px;
`;


function Home() {
  return (
    <Container>
      <ImageContainer>
        <Image src='https://res.cloudinary.com/dorwcwygq/image/upload/v1636226767/wtyker/home_fvomsv.webp'/>
      </ImageContainer>
      <IntroContainer>
        <Logo src='https://res.cloudinary.com/dorwcwygq/image/upload/v1636226766/wtyker/Wtyker_1_ln9ki6.png'/>
        <p>Zrób zakupy we Wtykerze</p>
        <p>w wybuchowo niskich cenach!</p>
        <Link to='/products'>
          <Button>Zacznij zakupy</Button>
        </Link>
      </IntroContainer>
    </Container>
  );
}

export default Home;