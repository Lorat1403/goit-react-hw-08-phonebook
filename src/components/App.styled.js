// import styled from '@emotion/styled';
// import { theme } from '../theme';
import styled from 'styled-components';

export const Section = styled.div`
  width: 70vw;
  margin-top: 45px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5%;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: ${p => p.theme.fontWeights.bold};
  padding-top: 50px;

  min-height: 100vh;
  text-align: center;
  background-color: lightblue;
  background: linear-gradient(#e66465, #9198e5);
`;

export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[4]}px;
  ${'' /* margin-top: 20px; */}
`;

export const PhonebookTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  margin-top: ${p => p.theme.space[3]}px;
`;
