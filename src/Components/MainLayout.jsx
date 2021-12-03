import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation/NavigationContainer';
import Footer from './Footer';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LayoutContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`;
const Layout = styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex: 2;
`;

const MainLayout = ({children}) => {

  const location = useLocation();

  return(
    location.pathname != '/'
      ?     
      <LayoutContainer>
        <Navigation/>
        <Layout>
          {children}
        </Layout>
        <Footer/>
      </LayoutContainer>
      :     
      <LayoutContainer>
        <Layout>
          {children}
        </Layout>
      </LayoutContainer>

  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;