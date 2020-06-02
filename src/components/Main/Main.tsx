import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../HomePage';
import PeoplePage from '../PeoplePege';
import AddPerson from '../AddPerson';
import ErrorPage from '../ErrorPage';
import './Main.scss';

type Props = {
  people: Person[];
  historyPush: (param: Param, path: string) => void;
  addPerson: ({
    name, born, died, sex, fatherName, motherName,
  }: AddPersonValues) => void;
};

const Main: React.FC<Props> = ({ people, historyPush, addPerson }) => {
  return (
    <div className="Main">
      <Switch>
        <Route
          path="/add-person"
          render={() => (
            <AddPerson
              people={people}
              addPerson={addPerson}
            />
          )}
        />

        <Route
          path="/people/:personName?"
          render={() => (
            <PeoplePage
              people={people}
              historyPush={historyPush}
            />
          )}
        />

        <Route path="/" exact>
          <HomePage />
        </Route>
        <Redirect from="/home" to="/" />

        <Route path="/error">
          <ErrorPage message="Not found" />
        </Route>
        <Redirect from="/*" to="/error" />

      </Switch>
    </div>
  );
};

export default Main;
