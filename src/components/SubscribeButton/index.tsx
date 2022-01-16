import React from 'react';

import { Container } from './styles';

type SubscribeButtonProps = {
  priceId: string;
};

function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return <Container>Subscribe now</Container>;
}

export default SubscribeButton;
