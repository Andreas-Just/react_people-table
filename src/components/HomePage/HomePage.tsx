import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import './HomePage.scss';

const HomePage = () => (
  <>
    <div className="HomePage">
      <Segment
        className="HomePage-Wrapper"
      >
        <Header
          content="Welcome to the People Table project!"
          className="HomePage-Header"
          size="huge"
          color="teal"
        />
        <Header
          className="HomePage-Text"
          size="large"
          color="teal"
        >
          Here you can download and view the list of people in the form of a
          table, as well as select a specific person, sort people in each column
          in ascending and descending order.
          To store and control the state of the application, use the History API.
        </Header>
      </Segment>
    </div>
  </>
);

export default HomePage;
