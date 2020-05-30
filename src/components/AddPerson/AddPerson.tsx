import React, { useState } from 'react';
import { Header, Form, Button } from 'semantic-ui-react';
import FormField from '../FormField';
import { MessageSuccess, MessageWarning } from '../common/Messages';
import { Validator } from '../../helpers/validators';
import './AddPerson.scss';


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
    validators: [],
  },
  {
    name: 'born',
    label: 'Year of birth',
    placeholder: 'Enter year of birth',
    validators: [],
  },
  {
    name: 'died',
    label: 'Year of death',
    placeholder: 'Enter the year of death',
    validators: [],
  },
  {
    name: 'sex',
    label: 'Gender',
    placeholder: 'Choose gender',
    validators: [],
  },
  {
    name: 'fatherName',
    label: 'Person’s father',
    placeholder: 'Enter the full name of the person’s father',
    validators: [],
  },
  {
    name: 'motherName',
    label: 'Person’s mother',
    placeholder: 'Enter the full name of the person’s mother',
    validators: [],
  },
  {
    name: 'children',
    label: 'Person’s children',
    placeholder: 'Enter the person’s children',
    validators: [],
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
  addPerson: ({
    name, born, died, sex, fatherName, motherName,
  }: AddPersonValues) => void;
};

const AddPerson: React.FC<Props> = ({ addPerson }) => {
  const [isValid] = useState(false);
  const [allFilled] = useState('');
  const [isFetching] = useState(false);
  const [values, setValues] = useState(defaultValues);

  // const [errors, setErrors] = useState(emptyErrors);
  /* eslint-disable no-console */
  console.log(addPerson);

  const handleSubmit = () => {
    console.log('handleSubmit');
  };

  const handleChange = () => {
    setValues(emptyErrors);
  };

  const handleBlur = () => {
    console.log('handleSubmit');
  };

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
        success={isValid && isFetching}
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
                placeholder={placeholder}
                value={values[name]}
                // error={errors[name]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ) : (
              <Form.Group className="AddPerson-FormField" key={name}>
                <FormField
                  id={label}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                  value={values[name]}
                  // error={errors[name]}
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
              ? <MessageSuccess isValid={isValid} isFetching={isFetching} />
              : <MessageWarning />
          }
        </Form.Group>
        <Form.Group className="AddPerson-FormGroup">
          <Button
            className="AddPerson-Button"
            content="Add Person"
            color="yellow"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddPerson;
