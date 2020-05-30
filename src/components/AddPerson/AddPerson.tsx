import React, { useState } from 'react';
import { Header, Form, Button } from 'semantic-ui-react';
import FormField from '../FormField';
import { MessageSuccess, MessageWarning } from '../common/Messages';
import { required, validYears, diedDiff, minLength, validName, Validator } from '../../helpers/validators';
import './AddPerson.scss';

const optionQuery = {
  maxLengthName: 60,
  maxLengthYear: 4,
  patternName: /[^a-z, ]/ig,
  patternYear: /[^0-9]/g,
};

type AddPersonErrors = {
  [key in keyof AddPersonValues]: string;
};

interface FieldConfig {
  name: keyof AddPersonValues;
  label: string;
  placeholder: string;
  validators?: Validator[];
}

const fieldConfigs: FieldConfig[] = [
  {
    name: 'name',
    label: 'Full name',
    placeholder: 'Enter full name',
    validators: [required, validName, minLength(2)],
  },
  {
    name: 'born',
    label: 'Year of birth',
    placeholder: 'Enter year of birth',
    validators: [required, validYears],
  },
  {
    name: 'died',
    label: 'Year of death',
    placeholder: 'Enter the year of death',
    validators: [required, validYears, diedDiff],
  },
  {
    name: 'sex',
    label: 'Gender',
    placeholder: 'Choose gender',
    validators: [required],
  },
  {
    name: 'fatherName',
    label: 'Person’s father',
    placeholder: 'Enter the full name of the person’s father',
    validators: [validName, minLength(2)],
  },
  {
    name: 'motherName',
    label: 'Person’s mother',
    placeholder: 'Enter the full name of the person’s mother',
    validators: [validName, minLength(2)],
  },
  {
    name: 'children',
    label: 'Person’s children',
    placeholder: 'Enter the person’s children',
    validators: [validName, minLength(2)],
  },
];

const defaultValues: AddPersonValues = {
  name: '',
  born: '',
  died: '',
  sex: '',
  fatherName: '',
  motherName: '',
  children: '',
};
const emptyErrors: AddPersonErrors = {
  name: '',
  born: '',
  died: '',
  sex: '',
  fatherName: '',
  motherName: '',
  children: '',
};

type Props = {
  people: Person[];
  // addPerson: ({
  //   name, born, died, sex, fatherName, motherName,
  // }: AddPersonValues) => void;
};

const AddPerson: React.FC<Props> = ({ people }) => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState(emptyErrors);

  const validateField = (
    name: keyof AddPersonValues,
    value: string,
    label: string,
    born = '',
  ) => {
    const config = fieldConfigs.find(field => field.name === name);

    if (!config) {
      throw new Error(`Unknown field "${name}"`);
    }

    const { validators = [] } = config;

    return validators
      .map(validator => validator(label, value, born))
      .filter(Boolean)
      .join(', ');
  };

  const handleSubmit = () => {
    setValues(values);
    setErrors(errors);
  };

  const handleChange = (
    event: React.SyntheticEvent, { name, value }: any,
  ) => {
    if (!event.target) {
      return;
    }

    const {
      patternName, patternYear,
      maxLengthName, maxLengthYear,
    } = optionQuery;
    let usefulness: string;

    if (name === 'born' || name === 'died') {
      usefulness = value.replace(patternYear, '').slice(0, maxLengthYear);
    } else {
      usefulness = value.replace(patternName, '')
        .replace(/\s{2,}/g, ' ')
        .slice(0, maxLengthName);
    }

    setValues(vals => ({
      ...vals,
      [name]: usefulness,
    }));
  };

  const handleBlur = (event: React.SyntheticEvent) => {
    const field = (event.target as HTMLFormElement).name as keyof AddPersonValues;
    const label: string = (event.target as HTMLFormElement).id;

    switch (label) {
      case 'Gender':
        return;
      case 'Year of death':
        setErrors(err => ({
          ...err,
          [field]: validateField(field, values[field], label, values.born),
        }));
        break;
      default:
        setErrors(err => ({
          ...err,
          [field]: validateField(field, values[field], label),
        }));
    }
  };

  const isValid = !Object.values(errors).some(Boolean);
  const allFilled = Object.values(values).every(Boolean);

  return (
    <div className="AddPerson">
      <Header
        content="Form to add a new person"
        className="App-Header AddPerson-Header"
        size="huge"
        color="teal"
      />
      <Form
        className="AddPerson-Form"
        warning
        success={isValid && allFilled}
        onSubmit={handleSubmit}
      >
        <Form.Group className="AddPerson-FormGroup">
          {fieldConfigs.map(({ name, label, placeholder }) => (
            name === 'born' || name === 'died' || name === 'sex' ? (
              <FormField
                key={name}
                id={label}
                name={name}
                label={label}
                born={values.born}
                placeholder={placeholder}
                value={values[name]}
                error={errors[name]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ) : (
              <Form.Group className="AddPerson-FormField" key={name}>
                <FormField
                  id={label}
                  name={name}
                  label={label}
                  born={values.born}
                  people={people}
                  placeholder={placeholder}
                  value={values[name]}
                  error={errors[name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
            )
          ))}
        </Form.Group>
        <Form.Group className="AddPerson-FormGroup">
          {
            isValid && allFilled
              ? <MessageSuccess isValid={isValid} allFilled={allFilled} />
              : <MessageWarning />
          }
        </Form.Group>
        <Form.Group className="AddPerson-FormGroup">
          <Button
            className="AddPerson-Button"
            content="Add Person"
            color="teal"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddPerson;
