import React from 'react';
import styled from 'styled-components/native';
import {moderateScale} from '../utils/scaler';
import {colors} from '../themes/colors';

type DescriptionProps = {
  children: string | null;
  testID?: string;
};

const StyledText = styled.Text`
  font-size: ${moderateScale(20)}px;
  color: ${colors.description};
  font-weight: 400;
`;

const Description: React.FC<DescriptionProps> = ({children, testID}) => {
  return <StyledText testID={testID}>{children}</StyledText>;
};

export default Description;
