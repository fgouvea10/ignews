import Primsic from '@prismicio/client';

function getPrismicClient(req?: unknown) {
  const prismic = Primsic.client(process.env.PRISMIC_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}

export default getPrismicClient;
