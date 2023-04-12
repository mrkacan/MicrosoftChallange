import React from 'react';
import styled from 'styled-components/native';
import {moderateScale} from '../utils/scaler';
import {colors} from '../themes/colors';

type TextProps = {
  children: string | null;
  testID?: string;
  type: 'default' | 'link';
  center?: boolean;
};

const StyledText = styled.Text<TextProps>`
  font-size: ${moderateScale(16)}px;
  color: ${props => (props.type === 'link' ? colors.link : colors.text)}
  text-decoration: ${props => (props.type === 'link' ? 'underline' : 'none')};
  text-decoration-color: ${props =>
    props.type === 'link' ? colors.link : 'transparent'};
  text-align: ${props => (props.center ? 'center' : 'left')};
  font-weight: bold;
`;

const Text: React.FC<TextProps> = ({children, type, center, testID}) => {
  return (
    <StyledText testID={testID} type={type} center={center}>
      {children}
    </StyledText>
  );
};

export default Text;
