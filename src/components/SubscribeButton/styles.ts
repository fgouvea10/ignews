import styled from 'styled-components';
import { gray_900, yellow_500 } from 'styles/colors';

export const Container = styled.button.attrs({
  type: 'button',
})`
  height: 4rem;
  width: 260px;
  border: 0;
  border-radius: 2rem;
  background: ${yellow_500};
  color: ${gray_900};
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.8);
  }
`;