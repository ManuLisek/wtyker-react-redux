import React, { useState } from 'react';
import Button from './Button';
import styled from 'styled-components';
import Popup from './Popup';
import validator from 'validator';
import size from '../styles/breakpoints';
import colors from '../styles/colors';

const FooterContainer = styled.footer`
background-color: ${colors.dark};
color: ${colors.white};
flex-basis: 100%;
display: flex;
justify-content: space-evenly;
margin-top: 180px;
padding-bottom: 40px;
bottom: 0;
max-height: 280px;
@media (max-width: ${size.lg}){
    flex-direction: column;
    align-items: right;
    max-height: unset;
}
`;

const Header = styled.h3`
padding: 10px 0 10px 0;
`;

const Info = styled.div`
flex-basis: 30%;
padding: 12px;
@media (max-width: ${size.lg}){
    flex-basis: 100%;
}
`;

const Icons = styled.div`
flex-direction: column;
align-items: flex-start;
`;

const Icon = styled.i`
min-height: 30px;
min-width: 30px;
background-color: ${colors.white};
border-radius: 5px;
line-height: 30px;
text-align: center;
font-size: 18px;
margin-right: 8px;
`;

const Facebook = styled(Icon)`
background-color: ${colors.facebook};
color: ${colors.white};
`;

const Youtube = styled(Icon)`
background-color: ${colors.youtube};
color: ${colors.white};
font-size: 10px;
`;

const Twitter = styled(Icon)`
background-color: ${colors.twitter};
`;

const Link = styled.a`
display: flex;
align-items: center;
width: max-content;
margin-bottom: 15px;
color: ${colors.white};
`;

const ButtonContainer = styled.div`
margin-left: 20px;
`;

const Input = styled.input`
background-color: ${colors.white};
border: 1px solid ${colors.white};
padding: 2px;
margin-top: 16px;
&:focus {
    border: 1px solid ${colors.black};
}
`;

const EmailError = styled.div`
font-size: 12px;
height: 26px;
width: 183px;
color: ${colors.maroon};
padding: 5px;
`;

const EmailContainer = styled.div`
display: flex;
justify-content: left;
flex-wrap: wrap;
padding: 10px 0;
`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 250px;
padding: 5px 0;
`;

const Footer = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [emailError, setEmailError] = useState('');

  function validateEmail(e){
    const email = e.target.value;
    setInputValue(email);
    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('Podaj poprawny adres email');
    }
  }
  
  function handleEmailSent(){
    if(inputValue === '') {
      setEmailError('To pole musi być wypełnione');
    } 
    else if(!emailError){
      setShowPopup(true);
      setInputValue('');
      setEmailError('');
    }
  }

  function handleKeyDown(e){
    if (e.key === 'Enter') {
      handleEmailSent();
    }
  }

  return(
    <FooterContainer>
      <Info>
        <Header>Śledź nas</Header>
        <Icons>
          <Link target="_blank" href="https://www.facebook.com/" rel="noreferrer">
            <Facebook className="fab fa-facebook-f"/>
            <p>Facebook</p>
          </Link>
          <Link target="_blank" href="https://www.youtube.com/" rel="noreferrer">
            <Youtube className="fas fa-play"/>
            <p>Youtube</p>
          </Link>
          <Link target="_blank" href="https://www.twitter.com/" rel="noreferrer">
            <Twitter className="fab fa-twitter"/>
            <p>Twitter</p>
          </Link>
        </Icons>
      </Info>
      <Info>
        <Header>Kontakt</Header>
        <p>Adres: Bydgoszcz</p>
        <p>ul. Elektryczna 101 75-634</p>
        <p>Telefon: 37(29)530-65-73</p>
        <p>E-mail: wtyker@gmail.com</p>
      </Info>
      <Info>
        <Header>Newsletter</Header>
        <p>Zostaw nam swojego maila żeby być na bieżąco z promocjami!</p>
        <EmailContainer>
          <InputContainer>
            <Input type="text" value={inputValue} placeholder="Twój adres email..." onChange={validateEmail} onKeyDown={handleKeyDown}/>
            <EmailError>{emailError ? emailError : ''}</EmailError>
          </InputContainer>
          <ButtonContainer>
            <Button onClick={() => handleEmailSent()}>Wyślij</Button>
          </ButtonContainer>
        </EmailContainer>
        <Popup trigger={showPopup} closePopup={()=> setShowPopup(false)}>
          <h3>Teraz nie przegapisz żadnej promocji!</h3>
        </Popup>
      </Info>
    </FooterContainer>
  );};

export default Footer; 