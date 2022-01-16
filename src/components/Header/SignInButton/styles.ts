import styled from 'styled-components';
import { gray_850, white } from 'styles/colors';

export const Container = styled.button.attrs({
  type: 'button',
})`
  height: 3rem;
  border-radius: 3rem;
  background: ${gray_850};
  border: 0;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${white};
  font-weight: bold;
  transition: filter 0.2s ease;

  svg {
    width: 20px;
    height: auto;
  }

  svg:first-child {
    margin-right: 1rem;
  }

  svg:last-child {
    margin-left: 1rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;