import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {colors} from '../themes/colors';
import {moderateScale, verticalScale} from '../utils/scaler';

type ButtonProps = {
  children: string;
  onPress: () => void;
  testID?: string;
  disabled?: boolean;
};

const StyledLinearGradient = styled(LinearGradient)`
  width: 100%;
  height: ${verticalScale(55)}px;
  border-radius: ${moderateScale(10)}px;
  background-color: ${({disabled}: {disabled?: boolean}) =>
    disabled ? colors.primaryHighlight : colors.primary};
  margin: ${moderateScale(20)}px 0;
  justify-content: center;
  align-items: center;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  height: ${verticalScale(55)}px;
`;

const StyledText = styled.Text`
  color: ${colors.white}
  font-size: ${moderateScale(18)}px;
  font-weight: bold;
  text-align: center;
`;

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onPress,
  testID,
}) => {
  return (
    <StyledTouchableOpacity
      onPress={onPress}
      testID={testID}
      disabled={disabled}>
      <StyledLinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={colors.buttonGradients}>
        <StyledText>{children}</StyledText>
      </StyledLinearGradient>
    </StyledTouchableOpacity>
  );
};

export default Button;
