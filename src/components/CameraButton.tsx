import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../themes/colors';
import {horizontalScale, verticalScale} from '../utils/scaler';

type CameraButtonProps = {
  onPress: () => void;
  testID?: string;
};

const StyledTouchableOpacity = styled.TouchableOpacity`
  width: ${horizontalScale(60)}px;
  height: ${horizontalScale(60)}px;
  border-radius: ${horizontalScale(60)}px;
  background-color: ${colors.primaryHighlight};
  position: absolute;
  bottom: ${verticalScale(80)}px;
  align-self: center;
`;

const hitSlop = {
  top: 80,
  bottom: 80,
  left: 80,
  right: 80,
};

const CameraButton: React.FC<CameraButtonProps> = ({onPress, testID}) => {
  return (
    <StyledTouchableOpacity
      hitSlop={hitSlop}
      onPress={onPress}
      testID={testID}
    />
  );
};

export default CameraButton;
