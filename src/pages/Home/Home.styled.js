import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: ${p => p.theme.space[0]}px ${p => p.theme.space[4]}px;
`;

export const HomeTitle = styled.h1`
  padding-top: ${p => p.theme.space[4]}px;
  width: 100%;
  font-size: ${p => p.theme.fontSizes.l};
  margin-left: ${p => p.theme.space[9]};
  margin-right: ${p => p.theme.space[9]};
  align-item: center;
`;

export const HomeLink = styled(Link)`
  color: ${p => p.theme.colors.orangered};
  transition: ${p => p.theme.transition.color};
  :hover,
  :focus {
    color: ${p => p.theme.colors.white};
  }
`;
