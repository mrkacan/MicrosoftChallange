import React from 'react';
import Screen from '../../components/Screen';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Spacer from '../../components/Spacer';
import Button from '../../components/Button';
import {useSignUp} from '../../hooks/useSignUp';
import Description from '../../components/Description';
import Avatar from '../../components/Avatar';
import {capitalize} from '../../utils/helpers';
import Text from '../../components/Text';
import {View} from 'react-native';

const ConfirmationScreen: React.FC = () => {
  const {data} = useSignUp();
  return (
    <Screen>
      <Container stretch>
        <View>
          <Spacer height={20} />
          <Title>{`Hello, ${capitalize(data.firstName)}!`}</Title>
          <Spacer height={20} />
          <Description>
            Your super-awesome portfolio has been successfully submitted! The
            preview below is what the community will see!
          </Description>
          <Spacer height={30} />
          <Avatar source={data.image} disabled />
          <Spacer height={30} />
          <Text type={'link'} center>
            {data.website}
          </Text>
          <Spacer height={10} />
          <Text type={'default'} center>
            {capitalize(data.firstName)}
          </Text>
          <Spacer height={10} />
          <Text type={'default'} center>
            {data.email}
          </Text>
        </View>
        <Button testID="loginButton" onPress={() => true}>
          Sign In
        </Button>
      </Container>
    </Screen>
  );
};

export default ConfirmationScreen;
