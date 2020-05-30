import React from 'react';
import { Header } from 'semantic-ui-react';
import './HomePage.scss';
import BackgroundAnimation from '../BackgroundAnimation';

const HomePage = () => (
  <>
    <div className="HomePage">
      <Header
        content="Home page"
        className="App-Header"
        size="huge"
        color="teal"
      />
      <BackgroundAnimation />
    </div>
  </>
);

export default HomePage;
