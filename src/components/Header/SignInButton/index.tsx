import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';

import { Container } from './styles';

function SignInButton() {
  const { data: session } = useSession();

  return (
    (session && (
      <Container onClick={() => signOut()}>
        <FaGithub color="#04d361" />
        {session.user.name}
        <FiX color="#737380" />
      </Container>
    )) || (
      <Container onClick={() => signIn('github')}>
        <FaGithub color="#eba417" />
        Sign in with Github
      </Container>
    )
  );
}

export default SignInButton;
