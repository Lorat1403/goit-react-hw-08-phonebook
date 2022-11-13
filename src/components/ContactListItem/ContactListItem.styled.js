// import styled from '@emotion/styled';
import styled from 'styled-components';

export const Line = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
`;
