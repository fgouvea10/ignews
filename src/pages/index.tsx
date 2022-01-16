import { GetStaticProps } from 'next';
import Head from 'next/head';

import SubscribeButton from 'components/SubscribeButton';
import { stripe } from 'services/stripe';
import { Container, Section } from 'styles/home';
import { currency } from 'utils/currency';

type HomeProps = {
  product: {
    priceId: string;
    amount: number;
  };
};

export default function Home({ product }: HomeProps) {

  return (
    <>
      <Head>
        <title>Home - ig.news</title>
        <meta
          name="description"
          content="Manage stories on ignews according to your subscriptions."
        />
      </Head>

      <Container>
        <Section>
          <span>👏 Hey, welcome!</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </Section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KIKraFtYl4XAt8XUbCnvQMh');

  const product = {
    priceId: price.id,
    amount: currency(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
