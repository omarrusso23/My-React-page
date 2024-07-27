import React, { useState } from 'react';
import './App.css';
import Info from './Components/Body/Info/info';
import Languages from './Components/Body/Languages/Languages';
import WorkInProgress from './Components/WorkInProgress';

const App = () => {
  const [isWorkInProgressVisible, setWorkInProgressVisible] = useState(true);

  const handleDismiss = () => {
    setWorkInProgressVisible(false);
  };

  return (
    <div className="App">
      <section className="body">
        <Info />
        <Languages />
        {isWorkInProgressVisible && <WorkInProgress onDismiss={handleDismiss} />}
      </section>
    </div>
  );
};

export default App;
