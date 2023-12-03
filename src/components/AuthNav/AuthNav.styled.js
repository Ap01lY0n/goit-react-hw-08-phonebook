import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  border-radius: 10px;
  font-weight: 700;
  color: cyan;
  font-size: 20px;
  transition: background-color 0.4s ease, color 0.4s ease;
  &:hover {
    background-color: #b960eb;
`;
export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

`