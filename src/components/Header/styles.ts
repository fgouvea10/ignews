import styled from 'styled-components';

import { gray_300, gray_800, white, yellow_500 } from 'styles/colors';

export const Container = styled.header`
  height: 5rem;
  border-bottom: 1px solid ${gray_800};
`;

export const Wrapper = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
`;

export const Navigation = styled.nav`
  margin-left: 5rem;
  height: 5rem;

  a {
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    height: 5rem;
    line-height: 5rem;
    color: ${gray_300};
    transition: color 0.2s ease;

    & + a {
      margin-left: 2rem;
    }

    &.active {
      color: ${white};
      font-weight: bold;
    }

    &.active::after {
      content: '';
      height: 3px;
      border-radius: 3px 3px 0 0;
      width: 100%;
      position: absolute;
      bottom: 1px;
      left: 0;
      background: ${yellow_500};
    }

    &:hover {
      color: ${white};
    }
  }
`;