import React from 'react';
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

  return(
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