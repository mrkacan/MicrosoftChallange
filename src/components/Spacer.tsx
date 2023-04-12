import React from 'react';
import styled from 'styled-components/native';
import {verticalScale} from '../utils/scaler';

type SpacerProps = {
  height: number;
};

const StyledView = styled.View<SpacerProps>`
  height: ${props => props.height}px;
`;

const Spacer: React.FC<SpacerProps> = ({height}) => {
  if (!height) {
    return null;
  }
  return <StyledView height={verticalScale(height)} />;
};

export default Spacer;
