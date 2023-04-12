import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../themes/colors';
import {moderateScale, verticalScale} from '../utils/scaler';

type InputProps = {
  field: {
    onChange: (value: string) => void;
    onBlur: () => void;
    value: string;
  };
  placeholder?: string;
  testID?: string;
  secureTextEntry?: boolean;
};

const StyledTextInput = styled.TextInput`
  width: 100%;
  height: ${verticalScale(50)}px;
  border: 1px solid ${colors.inputBorder};
  padding: 0 ${moderateScale(10)}px;
  font-size: ${moderateScale(16)}px;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: ${verticalScale(10)}px;
  border-radius: ${moderateScale(10)}px};
`;

const Input: React.FC<InputProps> = ({
  field: {onChange, onBlur, value},
  placeholder,
  testID,
  secureTextEntry,
}) => (
  <StyledTextInput
    onBlur={onBlur}
    onChangeText={onChange}
    value={value}
    autoCapitalize="none"
    autoCorrect={false}
    placeholder={placeholder}
    placeholderTextColor={colors.inputPlaceholder}
    testID={testID}
    secureTextEntry={secureTextEntry}
    returnKeyType={'done'}
  />
);

export default Input;
