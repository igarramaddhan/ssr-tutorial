import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background: green;
`;

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Link to="/detail">Detail</Link>
    </Container>
  );
};

export default Home;
