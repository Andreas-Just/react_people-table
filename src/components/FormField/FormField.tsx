import React, { useMemo } from 'react';
import cn from 'classnames';
import { DropdownItemProps, Form } from 'semantic-ui-react';
import './FormField.scss';

const genderOptions: DropdownItemProps[] = [
  { key: 'male', text: 'Male', value: 'm' },
  { key: 'female', text: 'Female', value: 'f' },
];

type Props = {
  id: string;
  name: string | number;
  value: string;
  born: string;
  people?: Person[];
  label: string;
  placeholder: string;
  error: string;
  onChange: (event: React.SyntheticEvent, data: object) => void;
  onBlur?: (event: React.FormEvent<EventTarget & Element>) => void;
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
            className={cn({
              'FormField-Select': true,
              'FormField-Select_gender': name === 'sex',
            })}
            width={12}
            text={
              (name === 'fatherName' || name === 'motherName') && !born
                ? 'Enter year of birth' : ''
            }
            options={options}
            error={!!error && { content: error }}
            disabled={(name === 'fatherName' || name === 'motherName') && !born}
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
            width={name === 'born' || name === 'died' ? 6 : 12}
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
