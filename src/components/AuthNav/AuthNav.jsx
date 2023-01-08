import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  display: inline-block;

  padding: 12px;
  font-weight: 700;

  &.active {
    color: #00bcd5;
  }
`;

export default function AuthNav() {
  return (
    <div>
      <StyledLink to="/register">Сheck in</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </div>
  );
}
