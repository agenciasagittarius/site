import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled(Link)`
  min-width: 120px;
  max-width: 100%;
  background: ${({primary}) => (primary ? 'var(--primary)' : 'var(--purple)')};
  border: 2px solid ${({primary}) => (primary ? 'var(--primary)' : 'var(--purple)')};
  border-radius: ${({round}) => (round ? '3rem' : 'none')};
  padding: ${({big}) => (big ? '1rem 2.5rem' : '0.75rem 2rem')};
  font-size: ${({big}) => (big ? '1.25rem' : '1rem')};
  font-weight: 600;
  color: var(--white);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  outline: none; 
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;

  &:hover{
    background: transparent;
    color: ${({primary}) => (primary ? 'var(--primary)' : 'var(--purple)')};
    transform: translateY(-0.25rem);
    box-shadow: 0.5rem 0.5rem 1rem var(--black);
  }
`