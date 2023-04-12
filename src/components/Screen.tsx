import React from 'react';
import styled from 'styled-components/native';

type ScreenProps = {
  children: React.ReactNode;
  testID?: string;
};

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Screen: React.FC<ScreenProps> = ({children, testID}) => {
  if (!children) {
    return null;
  }
  return <StyledSafeAreaView testID={testID}>{children}</StyledSafeAreaView>;
};

export default Screen;
