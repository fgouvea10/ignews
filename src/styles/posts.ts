import styled from 'styled-components';
import { gray_300, gray_700, yellow_500 } from './colors';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Wrapper = styled.div`
  max-width: 720px;
  margin: 5rem auto 0;

  a {
    display: block;

    & + a {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid ${gray_700};
    }
  }

  time {
    font-size: 1rem;
    display: flex;
    align-items: center;
    color: ${gray_300};
  }

  strong {
    display: block;
    font-size: 1.5rem;
    margin-top: 1rem;
    line-height: 2rem;
    transition: color 0.2s ease;

    &:hover {
      color: ${yellow_500};
    }
  }

  p {
    color: ${gray_300};
    margin-top: 0.5rem;
    line-height: 1.625rem;
  }
`;
