// import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: ${p => p.theme.space[5]}px;
`;

export const Link = styled(NavLink)`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding: ${p => p.theme.space[4]}px 0;
  transition: ${p => p.theme.transition.color};
  :hover,
  :focus {
    color: ${p => p.theme.colors.yellow};
  }
  &.active {
    color: ${p => p.theme.colors.white};
  }
`;

export const AuthNavDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;
`;
export const MainNavDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;
`;

export const UserMenuDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;
`;
