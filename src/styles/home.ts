import styled from 'styled-components';
import { cyan_500 } from './colors';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;

    img {
      display: none;
    }
  }
`;

export const Section = styled.section`
  max-width: 600px;

  > span {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h1 {
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: 900;
    margin-top: 2.5rem;

    span {
      color: ${cyan_500};
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-top: 1.5rem;

    span {
      color: ${cyan_500};
      font-weight: bold;
    }
  }

  button {
    margin-top: 2.5rem;
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;