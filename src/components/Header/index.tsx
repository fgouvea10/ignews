import React from 'react';

import { Container, Navigation, Wrapper } from './styles';

function Header() {
  return (
    <Container>
      <Wrapper>
        <img src="/images/logo.svg" alt="ignews" />
        <Navigation>
          <a className="active">Home</a>
          <a>Posts</a>
        </Navigation>
      </Wrapper>
    </Container>
  )
}

export default Header;
