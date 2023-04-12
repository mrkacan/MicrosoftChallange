import React, {createContext, useContext, useState} from 'react';
import {ISignUpFormData} from '../types';
import {deepClone} from '../utils/helpers';

interface ISignUpData extends ISignUpFormData {
  image: string;
}
interface SignUpContextData {
  data: ISignUpData;
  setFormData: (data: ISignUpFormData) => void;
  setImage: (image: string) => void;
}

type SignUpProviderProps = {
  children: React.ReactNode;
};

const SignUpContext = createContext<SignUpContextData | undefined>(undefined);

const SignUpProvider: React.FC<SignUpProviderProps> = ({children}) => {
  const [data, setData] = useState<ISignUpData>({
    firstName: '',
    email: '',
    password: '',
    website: '',
    image: '',
  });

  const setFormData = (formData: ISignUpFormData) => {
    const newData = deepClone(data);
    setData({...newData, ...formData});
  };

  const setImage = (image: string) => {
    const newData = deepClone(data);
    setData({...newData, image});
  };

  return (
    <SignUpContext.Provider value={{data, setFormData, setImage}}>
      {children}
    </SignUpContext.Provider>
  );
};

const useSignUp = (): SignUpContextData => {
  const context = useContext(SignUpContext);
  if (!context) {
    throw new Error('useSignUp must be used within an SignUpProvider');
  }
  return context;
};

export {SignUpProvider, useSignUp};
