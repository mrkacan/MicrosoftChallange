import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import {SignUpProvider} from './hooks/useSignUp';
import ErrorBoundary from 'react-native-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import ConfirmationScreen from './screens/ConfirmationScreen/ConfirmationScreen';
import CameraScreen from './screens/CameraScreen/CameraScreen';

type RootStackParamList = {
  signUp: undefined;
  cameraScreen: undefined;
  confirmationScreen: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const appMainStackNavigatorOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
const AppMainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={appMainStackNavigatorOptions}
        initialRouteName="signUp">
        <Stack.Group>
          <Stack.Screen name="signUp" component={SignUpScreen} />
          <Stack.Screen name="cameraScreen" component={CameraScreen} />
          <Stack.Screen
            name="confirmationScreen"
            component={ConfirmationScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function App(): JSX.Element {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <SignUpProvider>
        <StatusBar barStyle="dark-content" />
        <AppMainStack />
      </SignUpProvider>
    </ErrorBoundary>
  );
}

export default App;
