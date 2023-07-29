import React from 'react';
import PasswordResetForm from './components/PasswordResetForm';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <PasswordResetForm />   
    </div>
  );
};

export default App;
