import React, { useState } from 'react';
import Button from './Button';
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
bottom: 0;
max-height: 280px;
@media (max-width: 840px){
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
@media (max-width: 840px){
    flex-basis: 100%;
}
/* @media (max-width: 420px){
width: 320px;
} */
`;

const Icons = styled.div`
display: flex;
align-items: center;
@media (max-width: 420px){
flex-direction: column;
align-items: flex-start;
}
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

// const ButtonNewsletter = styled.button`
// background-color: #007065;
// color: white;
// border: none;
// border-radius: 5px;
// padding: 10px 20px;
// margin-left: 20px;
// max-height: 35px;
// /* @media (max-width: 320px){
// display: block;
// } */
// `;

// const CloseBtn = styled.button`
// background-color: #007065;
// color: white;
// border: none;
// border-radius: 5px;
// padding: 10px 20px;
// margin: 20px;
// &:hover {
//     cursor: pointer;
// }
// `;

const ButtonContainer = styled.div`
/* padding: 10px 20px; */
margin-left: 20px;
`;

const Input = styled.input`
background-color: white;
border: 1px solid white;
padding: 2px;
margin-top: 16px;
&:focus {
    border: 1px solid black;
}
`;

const EmailError = styled.div`
font-size: 12px;
height: 26px;
color: maroon;
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
        <EmailContainer>
          <InputContainer>
            <Input type="text" value={inputValue} placeholder="Twój adres email..." onChange={validateEmail} onKeyDown={handleKeyDown}/>
            <EmailError>{`${showEmailError ? emailError : ''}`}</EmailError>
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