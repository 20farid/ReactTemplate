/**
 * Global component
 */
import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row } from 'components/Grid';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Wraper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;
const LeftSide = styled.div`
  position: relative;
  width: 70%;
  max-width: 720px;
`;
const RightSide = styled.div`
  position: relative;
  width: 30%;
  max-width: 300px;
`;

const MainContainer = props => (
  <Wraper>
    <Header />
    <main>
      {props.children}
      {/*<Row>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </Row>*/}
    </main>
    <Footer />
  </Wraper>
);
MainContainer.propTypes = {
  children: PropTypes.any,
};

export default compose()(MainContainer);
