import React from 'react';
import { signIn, useSession } from 'next-auth/react';

import { Container } from './styles';

type SubscribeButtonProps = {
  priceId: string;
};

function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();

  const handleSubscribe = () => {
    if (!session) {
      signIn('github');
      return;
    }
  }

  return <Container onClick={handleSubscribe}>Subscribe now</Container>;
}

export default SubscribeButton;
