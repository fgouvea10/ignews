import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import { Container } from './styles';

function SignInButton() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  return (
    (isUserLoggedIn && (
      <Container>
        <FaGithub color="#04d361" />
        Felipe Gouvea
        <FiX color="#737380" />
      </Container>
    )) || (
      <Container>
        <FaGithub color="#eba417" />
        Sign in with Github
      </Container>
    )
  );
}

export default SignInButton;
