import React from 'react';

import SignInButton from './SignInButton';
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

        <SignInButton />
      </Wrapper>
    </Container>
  )
}

export default Header;