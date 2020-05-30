import React from 'react';
import { DropdownItemProps, Form } from 'semantic-ui-react';
import './FormField.scss';

// const defaultOptions: Option[] = [
//   { key: 'default', text: 'Enter year of birth', value: 'off' },
// ];

const genderOptions: DropdownItemProps[] = [
  { key: 'male', text: 'Male', value: 'm' },
  { key: 'female', text: 'Female', value: 'f' },
];

type Props = {
  id: string;
  name: string;
  value: string;
  born: string;
  people?: Person[];
  label: string;
  placeholder: string;
  error: string;
  onChange: (event: React.SyntheticEvent, data: object) => void;
  onBlur?: (event: React.SyntheticEvent, data: object) => void;
};

const FormField: React.FC<Props> = ({
  id,
  name,
  value,
  label,
  born = '',
  people = [],
  placeholder = '',
  error = '',
  onChange,
  onBlur = () => {},
}) => {
  const fatherOptions = people.map(person => (
    person.sex === 'm' && person.born < +born && person.died > +born
      ? { text: person.name, value: person.name }
      : ''))
    .filter(Boolean);

  // eslint-disable-next-line no-console
  console.log(fatherOptions);

  return (
    <>
      {name === 'sex'
        ? (
          <Form.Select
            className="FormField-Input"
            width={4}
            options={genderOptions}
            error={!!error && { content: error }}
            id={id}
            name={name}
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )
        : (
          <Form.Input
            className="FormField-Input"
            width={name === 'born' || name === 'died' ? 4 : 12}
            error={!!error && { content: error }}
            disabled={name === 'died' && !born}
            id={id}
            name={name}
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
    </>
  );
};

export default FormField;
