import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../themes/colors';
import {horizontalScale, moderateScale, verticalScale} from '../utils/scaler';

type InputErrorProps = {
  children?: string;
  testID?: string;
  center?: boolean;
};

//error message
const StyledText = styled.Text<InputErrorProps>`
  font-size: ${moderateScale(12)}px;
  color: ${colors.inputErrorText};
  margin: ${verticalScale(5)}px ${horizontalScale(15)}px ${verticalScale(20)}px
    ${horizontalScale(15)}px;
  text-align: ${({center}) => (center ? 'center' : 'left')};
`;

const InputError: React.FC<InputErrorProps> = ({center, children, testID}) => {
  if (!children) {
    return null;
  }
  return (
    <StyledText testID={testID} center={center}>
      {children}
    </StyledText>
  );
};

export default InputError;
