import React from 'react';
import styled from 'styled-components/native';
import {moderateScale} from '../utils/scaler';

type ContainerProps = {
  children: React.ReactNode;
  stretch?: boolean;
};

const StyledView = styled.View<ContainerProps>`
  margin: ${moderateScale(25)}px;
  flex: 1;
  justify-content: ${props => (props.stretch ? 'space-between' : 'flex-start')};
`;

const Container: React.FC<ContainerProps> = ({children, stretch}) => {
  if (!children) {
    return null;
  }
  return <StyledView stretch={stretch}>{children}</StyledView>;
};

export default Container;
