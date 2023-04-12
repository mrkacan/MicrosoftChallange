import React, {useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useSignUp} from '../../hooks/useSignUp';
import {validations} from '../../utils/validations';
import Input from '../../components/Input';
import Screen from '../../components/Screen';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Spacer from '../../components/Spacer';
import Button from '../../components/Button';
import InputError from '../../components/InputError';
import Description from '../../components/Description';
import {ISignUpFormData, SignUpInput} from '../../types';
import Avatar from '../../components/Avatar';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, View} from 'react-native';

const inputs: Array<SignUpInput> = [
  {
    name: 'firstName',
    placeholder: 'First Name',
    testID: 'firstNameInput',
    errorTestID: 'firstNameError',
    rules: {
      required: 'First name is required',
      validate: {
        length: validations.firstName.length,
        validCharacters: validations.firstName.validCharacters,
      },
    },
  },
  {
    name: 'email',
    placeholder: 'Email',
    testID: 'emailInput',
    errorTestID: 'emailError',
    rules: {
      required: 'Email is required',
      validate: {
        length: validations.email.length,
        validCharacters: validations.email.validEmail,
      },
    },
  },
  {
    name: 'password',
    placeholder: 'Password',
    testID: 'passwordInput',
    errorTestID: 'passwordError',
    rules: {
      required: 'Password is required',
      validate: {
        length: validations.password.length,
        validCharacters: validations.password.validPassword,
      },
    },
    secureTextEntry: true,
  },
  {
    name: 'website',
    placeholder: 'Website',
    testID: 'websiteInput',
    errorTestID: 'websiteError',
    rules: {
      required: 'Website is required',
      validate: {
        length: validations.website.length,
        validCharacters: validations.website.validWebsite,
      },
    },
  },
];
const SignUpScreen: React.FC = () => {
  const {data: formData, setFormData} = useSignUp();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({
    reValidateMode: 'onSubmit',
    defaultValues: {
      firstName: '',
      email: '',
      password: '',
      website: '',
      image: formData.image,
    },
  });

  const onSubmit = (data: ISignUpFormData) => {
    setFormData(data);
    navigation.navigate('confirmationScreen');
  };

  const navigateToCameraScreen = () => {
    navigation.navigate('cameraScreen');
  };

  useEffect(() => {
    setValue('image', formData.image);
  }, [setValue, formData.image]);

  return (
    <Screen>
      <ScrollView>
        <Container>
          <View>
            <Title testID="profileCreationTitle">Profile Creation</Title>
            <Spacer height={20} />
            <Description testID="profileCreationDescription">
              Use the form below to submit your portfolio. An email and password
              are required.
            </Description>
            <Spacer height={40} />
            <Controller
              name={'image'}
              control={control}
              rules={{required: 'Image is required'}}
              render={() => (
                <Avatar
                  source={formData.image}
                  onPress={navigateToCameraScreen}
                />
              )}
            />
            {errors?.image && (
              <InputError testID="loginErrorText" center>
                {errors?.image?.message}
              </InputError>
            )}
            <Spacer height={10} />
            {inputs.map(
              ({
                name,
                placeholder,
                testID,
                rules,
                secureTextEntry,
                errorTestID,
              }) => (
                <React.Fragment key={name}>
                  <Controller
                    name={name}
                    control={control}
                    rules={rules}
                    render={({field: {onChange, onBlur, value}}) => (
                      <Input
                        field={{onChange, onBlur, value}}
                        placeholder={placeholder}
                        testID={testID}
                        secureTextEntry={secureTextEntry}
                      />
                    )}
                  />
                  {errors?.[name] && (
                    <InputError testID={errorTestID}>
                      {errors?.[name]?.message}
                    </InputError>
                  )}
                </React.Fragment>
              ),
            )}
          </View>
          <Button testID="submitButton" onPress={handleSubmit(onSubmit)}>
            Submit
          </Button>
        </Container>
      </ScrollView>
    </Screen>
  );
};

export default SignUpScreen;
