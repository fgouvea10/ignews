import Head from 'next/head';

import SubscribeButton from 'components/SubscribeButton';
import { Container, Section } from 'styles/home';

export default function Home() {
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
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </Section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </Container>
    </>
  );
}
