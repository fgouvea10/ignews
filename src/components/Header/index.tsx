import React from 'react';

import SignInButton from './SignInButton';
import { Container, Navigation, Wrapper } from './styles';
import { useRouter } from 'next/router';
import ActiveLink from './ActiveLink';

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
