import React from 'react';

import ActiveLink from './ActiveLink';
import SignInButton from './SignInButton';
import { Container, Navigation, Wrapper } from './styles';

function Header() {

  return (
    <Container>
      <Wrapper>
        <img src="/images/logo.svg" alt="ignews" />
        <Navigation>
          <ActiveLink activeClassName="active" href="/">
            <a className="active">Home</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </Navigation>

        <SignInButton />
      </Wrapper>
    </Container>
  );
}

export default Header;
