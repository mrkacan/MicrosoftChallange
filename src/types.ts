export type SignUpInput = {
  name: keyof ISignUpFormData;
  placeholder: string;
  testID: string;
  errorTestID?: string;
  rules: object;
  secureTextEntry?: boolean;
};
export interface ISignUpFormData {
  firstName: string;
  email: string;
  password: string;
  website: string;
}
