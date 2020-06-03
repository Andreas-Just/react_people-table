/* eslint-disable max-len */
export type Validator = (name: string, value: string, born?: string) => string;

export const required: Validator = (name, value) => {
  if (value) {
    return '';
  }

  return `${name} is required`;
};

export const validYears: Validator = (name, value) => {
  return +value < 1400 || +value > new Date().getFullYear()
    ? `${name} is valid only between 1400 and the current year`
    : '';
};

export const diedDiff: Validator = (name, value, born) => {
  return born && +value - +born <= 150 && +value >= +born
    ? ''
    : `${name} must not be less than or exceed the year of birth by more than 150 years`;
};

export const validName: Validator = (name, value) => {
  const NAME_REGEXP = /^((?<title>.*\.\s)*(?<firstname>([A-Z][a-z]+\s*)+)(\s)(?<suffix>.*)(?<middleinitial>([A-Z]\.?\s)*)(?<lastname>[A-Z][a-zA-Z-']+))?$/;

  return NAME_REGEXP.test(value)
    ? ''
    : `${name} must be valid`;
};

export const minLength = (length: number): Validator => {
  return (name, value) => {
    return !value || (value.length >= length)
      ? ''
      : `${name} should have at least ${length} characters`;
  };
};
