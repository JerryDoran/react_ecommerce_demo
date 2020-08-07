import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1rem;
  background: transparent;
  border: 0.08rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
  color: ${(props) => (props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)')};
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) => (props.cart ? 'var(--mainYellow)' : '#777')};
    color: var(--mainWhite);
  }

  &:focus {
    outline: none;
    transform: scale(1.05);
  }
`;
