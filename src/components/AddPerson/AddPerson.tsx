import React from 'react';
import { Header } from 'semantic-ui-react';
import './AddPerson.scss';

type Props = {
  people: Person[];
};

const AddPerson: React.FC<Props> = ({ people }) => {
  console.log(people);

  return (
    <div className="AddPerson">
      <Header
        content="Form to add a new person"
        className="App-Header"
        size="huge"
        color="teal"
      />
    </div>
  );
};

export default AddPerson;
