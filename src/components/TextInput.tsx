import React from 'react';
import styles from './TextInput.module.css';

interface TextInputProps {
  type: 'text' | 'password';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ type, value, onChange, placeholder }) => {
  return (
    <input className={styles.customInput}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TextInput;