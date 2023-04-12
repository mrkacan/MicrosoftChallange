import React, {useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';
import {useSignUp} from '../../hooks/useSignUp';
import Title from '../../components/Title';
import CameraButton from '../../components/CameraButton';

const CameraScreen: React.FC = () => {
  const [cameraPermission, setCameraPermission] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;
  const camera = useRef<Camera>(null);
  const navigation = useNavigation();
  const {setImage} = useSignUp();

  useEffect(() => {
    const requestCameraPermission = async () => {
      const permission = await Camera.requestCameraPermission();
      if (permission === 'authorized') {
        setCameraPermission(true);
      } else {
        setCameraPermission(false);
      }
    };
    requestCameraPermission();
  }, []);

  const onTakePhoto = async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto();
      console.log(photo);
      setImage(photo.path);
      navigation.goBack();
    }
  };

  return (
    <>
      {cameraPermission && device ? (
        <Camera
          ref={camera}
          style={{width: '100%', height: '100%'}}
          device={device}
          photo={true}
          isActive={true}>
          <CameraButton onPress={onTakePhoto} />
        </Camera>
      ) : (
        <Title testID="loginWelcomeText">No camera permission</Title>
      )}
    </>
  );
};

export default CameraScreen;
