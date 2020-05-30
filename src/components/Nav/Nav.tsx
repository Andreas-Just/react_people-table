import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react';
import './Nav.scss';

const optionQuery = {
  maxLength: 50,
  pattern: /[^a-z ]/ig,
};

type Props = {
  query: string;
  setQuery: (val: string) => void;
  applyQuery: (val: string) => void;
};

const Nav: React.FC<Props> = ({ query, setQuery, applyQuery }) => {
  return (
    <>
      <Menu inverted color="teal" className="Nav">
        <Menu.Item
          as={NavLink}
          name="home"
          to="/"
          exact
        />
        <Menu.Item
          as={NavLink}
          name="people"
          to="/people"
          exact
        />
        <Menu.Item
          as={NavLink}
          name="add person"
          to="/add-person"
          exact
        />
        <Route path="/people">
          <Menu.Item position="right">
            <Input
              className="Nav-Search icon"
              placeholder="Search..."
              icon="search"
              size="mini"
              value={query}
              onChange={({ target }) => {
                const { pattern, maxLength } = optionQuery;
                const queryStr = target.value
                  .replace(pattern, '')
                  .replace(/\s{2,}/g, ' ')
                  .slice(0, maxLength);

                setQuery(queryStr);
                applyQuery(queryStr);
              }}
            />
          </Menu.Item>
        </Route>
      </Menu>
    </>
  );
};

export default Nav;
