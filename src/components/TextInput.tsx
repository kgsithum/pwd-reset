import React from 'react';
import styles from './TextInput.module.css';
import { InputType } from '../types/InputType';

interface TextInputProps {
  type: InputType;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id: string;
}

const TextInput: React.FC<TextInputProps> = ({ type, value, onChange, placeholder, id }) => {
  return (
    <input className={styles.customInput}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
    />
  );
};

export default TextInput;