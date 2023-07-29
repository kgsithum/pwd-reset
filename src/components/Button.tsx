import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  disabled?: boolean;
  onClick: () => void;
  buttonText: string;
}

const Button: React.FC<ButtonProps> = ({ disabled, onClick, buttonText }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={styles.customButton}>
      {buttonText}
    </button>
  );
};

export default Button;