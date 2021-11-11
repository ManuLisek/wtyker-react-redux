import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation/NavigationContainer';
import Footer from './Footer';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LayoutContainer = styled.div`
display: flex;
flex-direction: column;
`;
const Layout = styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const MainLayout = ({children}) => {

  const location = useLocation();

  return(
    <LayoutContainer>
      <Navigation/>
      <Layout>
        {children}
      </Layout>
      {
        location.pathname != '/'
          ? <Footer />
          : ''
      }
    </LayoutContainer>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;