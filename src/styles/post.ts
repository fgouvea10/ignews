import styled from 'styled-components';

import { gray_300, gray_50 } from './colors';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Wrapper = styled.article`
  max-width: 720px;
  margin: 5rem auto 0;

  h1 {
    font-size: 3.5rem;
    font-weight: 900;
  }

  time {
    display: block;
    font-size: 1rem;
    color: ${gray_300};
    margin-top: 1.5rem;
  }

  div {
    margin-top: 2rem;
    line-height: 2rem;
    font-size: 1.125rem;
    color: ${gray_50};

    p,
    ul {
      margin: 1.5rem 0;
    }

    ul {
      padding-left: 1.5rem;

      li {
        margin: 0.5rem 0;
      }
    }
  }
`;
