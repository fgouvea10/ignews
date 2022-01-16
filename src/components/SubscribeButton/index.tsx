import React from 'react';
import { signIn, useSession } from 'next-auth/react';

import { Container } from './styles';
import { api } from 'services/api';
import { getStripeJs } from 'services/stripe-js';
import toast from 'react-hot-toast';

type SubscribeButtonProps = {
  priceId: string;
};

function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();

  const handleSubscribe = async () => {
    if (!session) {
      signIn('github');
      return;
    }

    try {
      const response = await api.post('/subscribe');
      
      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });

    } catch (err) {
      toast.error(err.message);
    }
  }

  return <Container onClick={handleSubscribe}>Subscribe now</Container>;
}

export default SubscribeButton;
