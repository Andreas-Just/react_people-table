import React, { useMemo } from 'react';
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
  const fatherOptions = people?.reduce((arr: DropdownItemProps[], person: Person) => {
    if (person.sex === 'm' && person.born < +born && person.died > +born) {
      arr.push({
        key: String(person.id),
        text: person.name,
        value: person.name,
      });
    }

    return arr;
  }, []);

  const motherOptions = people?.reduce((arr: DropdownItemProps[], person: Person) => {
    if (person.sex === 'f' && person.born < +born && person.died > +born) {
      arr.push({
        key: String(person.id),
        text: person.name,
        value: person.name,
      });
    }

    return arr;
  }, []);

  // console.log(fatherOptions, motherOptions);
  const options = useMemo(() => {
    if (name === 'fatherName') {
      return fatherOptions;
    }

    if (name === 'motherName') {
      return motherOptions;
    }

    return genderOptions;
  }, [name, fatherOptions, motherOptions]);

  return (
    <>
      {name === 'sex' || name === 'fatherName' || name === 'motherName'
        ? (
          <Form.Select
            className="FormField-Input"
            width={name === 'fatherName' || name === 'motherName' ? 12 : 4}
            options={options}
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
