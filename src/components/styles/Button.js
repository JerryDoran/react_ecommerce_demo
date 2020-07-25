import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1rem;
  background: transparent;
  border: 0.08rem solid var(--mainWhite);
  color: var(--mainWhite);
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #777;
  }

  &:focus {
    outline: none;
    transform: scale(1.05);
  }
`;
