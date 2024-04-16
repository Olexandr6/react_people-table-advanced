import { PeoplePage } from './components/PeoplePage';
import { Navbar } from './components/Navbar';

import './App.scss';

export const App = () => {
  return (
    <div data-cy="app">
      <header>
        <div className="header-container">
          <img>Some img</img>
          <h1>New header</h1>
        </div>
      </header>
      <Navbar />

      <div className="section">
        <div className="container">
          <h1 className="title">Home Page</h1>
          <h1 className="title">Page not found</h1>
          <PeoplePage />
        </div>
      </div>

      <footer>Some footer</footer>
    </div>
  );
};
