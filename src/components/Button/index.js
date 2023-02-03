import styled from 'styled-components'

export const Button = styled.a`
  min-width: 120px;
  max-width: 100%;
  background: ${({ primary }) => (primary ? 'var(--primary)' : 'var(--purple)')};
  border: 2px solid ${({ primary }) => (primary ? 'var(--primary)' : 'var(--purple)')};
  border-radius: ${({ round }) => (round ? '3rem' : 'none')};
  padding: ${({ big }) => (big ? '.75rem 2rem' : '0.5rem 1.5rem')};
  font-size: ${({ big }) => (big ? '1rem' : '.8rem')};
  font-weight: 600;
  color: var(--white);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  outline: none; 
  white-space: nowrap;
  box-shadow: 0px 0px 10px 0px #ffab00;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  border-radius: 4px;

  svg {
    margin-right: .5rem;
    fill: var(--white);
    transition: all 0.3s;
  }

  &:hover{
    background: transparent;
    color: ${({ primary }) => (primary ? 'var(--primary)' : 'var(--purple)')};
    transform: translateY(-0.25rem);
    box-shadow: 0.5rem 0.5rem 1rem var(--black);

    svg {
      fill: ${({ primary }) => (primary ? 'var(--primary)' : 'var(--purple)')};
    }
  }

  @media screen and (min-width: 768px) {
    font-size: ${({ big }) => (big ? '1.25rem' : '1rem')};
    padding: ${({ big }) => (big ? '1rem 2.5rem' : '0.75rem 2rem')};
  }
`