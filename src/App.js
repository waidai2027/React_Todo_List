import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
 // Import your new page component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
         {/* Route for the new page */}
      </Switch>
    </Router>
  );
}

export default App;