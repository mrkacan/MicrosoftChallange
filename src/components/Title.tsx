import React from 'react';
import styled from 'styled-components/native';
import {moderateScale} from '../utils/scaler';
import {colors} from '../themes/colors';

type TitleProps = {
  children: string | null;
  testID?: string;
};

const StyledText = styled.Text`
  font-size: ${moderateScale(30)}px;
  color: ${colors.title};
  font-weight: 900;
`;

const Title: React.FC<TitleProps> = ({children, testID}) => {
  return <StyledText testID={testID}>{children}</StyledText>;
};

export default Title;
