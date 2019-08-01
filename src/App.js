import React from 'react';
import './App.css';

// Порядок подключения компонент
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default App;
