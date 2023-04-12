import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../themes/colors';
import {moderateScale, verticalScale} from '../utils/scaler';

type AvatarProps = {
  source: string | undefined;
  testID?: string;
  onPress?: () => void;
  disabled?: boolean;
};

const StyledImage = styled.Image`
  width: ${verticalScale(150)}px;
  height: ${verticalScale(200)}px;
  border-radius: ${moderateScale(10)}px;
  object-fit: cover;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: ${colors.avatarBackground};
  width: ${verticalScale(150)}px;
  height: ${verticalScale(200)}px;
  border-radius: ${moderateScale(10)}px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const StyledText = styled.Text`
  color: ${colors.black};
  font-size: ${moderateScale(14)}px;
  font-weight: 500;
  text-align: center;
`;

const Avatar: React.FC<AvatarProps> = ({onPress, disabled, testID, source}) => {
  return (
    <StyledTouchableOpacity onPress={onPress} disabled={disabled}>
      {source ? (
        <StyledImage testID={testID} source={{uri: source}} />
      ) : (
        <StyledText>Tap to add avatar</StyledText>
      )}
    </StyledTouchableOpacity>
  );
};

export default Avatar;
