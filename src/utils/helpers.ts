// Deep clone for objects (not for functions)
export const deepClone = (obj: any) => {
  return JSON.parse(JSON.stringify(obj));
};

// Capitalize first letter of a string
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
