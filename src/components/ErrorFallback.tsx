import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const StyledErrorFallbackContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ErrorFallback: React.FC = () => {
  return (
    <StyledErrorFallbackContainer>
      <Text>Something went wrong</Text>
    </StyledErrorFallbackContainer>
  );
};

export default ErrorFallback;
