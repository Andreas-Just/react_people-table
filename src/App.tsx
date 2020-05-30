import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useParams, Redirect } from 'react-router-dom';
import debounce from 'lodash.debounce';
import Nav from './components/Nav';
import Main from './components/Main';
import { getTabs } from './api/getTabs';
import './App.scss';

const App = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getTabs().then(setPeople);
  }, []);

  const history = useHistory();
  const location = useLocation();
  const { personName } = useParams();
  const searchParams = new URLSearchParams(location.search);
  const queryFromURL = searchParams.get('query') || '';
  const historyPush = (param: Param, path: string): void => {
    const params = {
      ...Object.fromEntries((searchParams.entries())),
      ...param,
    };
    const pathName = path || '';

    for (const key in params) {
      searchParams.set(key, params[key]);
    }

    history.push({
      pathname: `/people/${pathName}`,
      search: searchParams.toString(),
    });
  };

  useEffect(() => {
    setQuery(queryFromURL);
  }, [queryFromURL]);

  const updateQueryInURL = (queryStr: string) => {
    if (queryStr !== '') {
      historyPush({ query: queryStr }, personName);
    } else {
      searchParams.delete('query');
      historyPush({}, personName);
    }
  };

  const applyQuery = useCallback(debounce(updateQueryInURL, 2000), []);

  const lowerQuery = queryFromURL.toLowerCase();
  const filteredPeople = useMemo(() => (
    people.filter(({ name }) => name.toLowerCase().includes(lowerQuery))
  ), [lowerQuery, people]);

  const addPerson = ({
    name, born, died, sex, fatherName, motherName,
  }: AddPersonValues) => {
    const allId: number[] = people.map(person => person.id as number);
    const nextId = Math.max(...allId) + 1;
    const age = +died - +born;
    const century = +died % 100 === 0 ? +died / 100 : Math.ceil(+died / 100);

    const newPerson: Person = {
      name,
      sex,
      age,
      born: +born,
      died: +died,
      century,
      fatherName,
      motherName,
      children: '',
      slug: '',
      id: nextId,
    };

    setPeople([...people, newPerson]);

    return <Redirect to="/people/:id?" />;
  };

  if (!people.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <Nav
        query={query}
        setQuery={setQuery}
        applyQuery={applyQuery}
      />
      <Main
        people={filteredPeople}
        historyPush={historyPush}
        addPerson={addPerson}
      />
      <footer className="App-Footer">
        &copy;Andreas Just 2020
      </footer>
    </div>
  );
};

export default App;
