const usernamePattern = /^[A-Za-z]+$/;

export const validations = {
  firstName: {
    length: (value: string) => {
      return (
        (value.length >= 2 && value.length <= 30) ||
        'First name must be between 2 and 30 characters.'
      );
    },
    validCharacters: (value: string) => {
      return (
        usernamePattern.test(value) ||
        'Your first name can only contain letters.'
      );
    },
  },
  email: {
    length: (value: string) => {
      return (
        (value.length >= 2 && value.length <= 50) ||
        'Email must be between 2 and 50 characters.'
      );
    },
    validEmail: (value: string) => {
      return (
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
        'Please enter a valid email address.'
      );
    },
  },
  password: {
    length: (value: string) => {
      return (
        (value.length >= 6 && value.length <= 30) ||
        'Password must be between 6 and 30 characters.'
      );
    },
    validPassword: (value: string) => {
      return (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(value) ||
        'Password must contain at least one uppercase letter, one lowercase letter and one number.'
      );
    },
  },
  website: {
    length: (value: string) => {
      return (
        (value.length >= 2 && value.length <= 100) ||
        'Website must be between 2 and 50 characters.'
      );
    },
    validWebsite: (value: string) => {
      return (
        /^(http|https):\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/.test(value) ||
        'Please enter a valid website address.'
      );
    },
  },
};
