import React, { useState } from 'react';
import styled from 'styled-components';
import Popup from './Popup';
import validator from 'validator';

const FooterContainer = styled.footer`
background-color: #5f6670;
color: white;
flex-basis: 100%;
display: flex;
justify-content: space-evenly;
margin-top: 180px;
padding-bottom: 40px;
`;

const Header = styled.h3`
padding: 10px 0 10px 0;
`;

const Info = styled.div`
flex-basis: 30%;
padding: 12px;
`;

const Icons = styled.div`
display: flex;
align-items: center;
`;

const Icon = styled.i`
height: 30px;
width: 30px;
background-color: white;
border-radius: 5px;
line-height: 30px;
text-align: center;
font-size: 18px;
margin: 10px 8px 10px 0;
`;

const Facebook = styled(Icon)`
background-color: #3b5998;
color: white;
`;

const Youtube = styled(Icon)`
background-color: #c4302b;
color: white;
font-size: 10px;
`;

const Twitter = styled(Icon)`
background-color: #00acee;
`;

const IconDescription = styled.p`
margin-right: 15px;
`;

const ButtonNewsletter = styled.button`
background-color: #007065;
color: white;
border: none;
border-radius: 5px;
padding: 10px 20px;
margin: 15px 15px 0 15px;
`;

const CloseBtn = styled.button`
background-color: #007065;
color: white;
border: none;
border-radius: 5px;
padding: 10px 20px;
margin: 20px;
&:hover {
    cursor: pointer;
}
`;

const Input = styled.input`
background-color: white;
border: 1px solid white;
&:focus {
    border: 1px solid black;
}
`;

const EmailError = styled.div`
font-size: 12px;
color: maroon;
`;

const Footer = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);

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
      setShowEmailError(true);
    } 
    else if(!emailError){
      setShowPopup(true);
      setInputValue('');
      setEmailError('');
      setShowEmailError(false);
    } else setShowEmailError(true); 

  }

  return(
    <FooterContainer>
      <Info>
        <Header>Śledź nas</Header>
        <Icons>
          <Facebook className="fab fa-facebook-f"/><IconDescription>Facebook</IconDescription>
          <Youtube className="fas fa-play"/><IconDescription>Youtube</IconDescription>
          <Twitter className="fab fa-twitter"/><IconDescription>Twitter</IconDescription>
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
        <Input type="text" value={inputValue} placeholder="Twój adres email..." onChange={validateEmail}/>
        <ButtonNewsletter onClick={() => handleEmailSent()}>Wyślij</ButtonNewsletter>
        <EmailError>{`${showEmailError ? emailError : ''}`}</EmailError>
        <Popup trigger={showPopup}>
          <h3>Teraz nie przegapisz żadnej promocji!</h3>
          <CloseBtn onClick={()=>{ setShowPopup(false);}}>OK</CloseBtn>
        </Popup>
      </Info>
    </FooterContainer>
  );};

export default Footer; 