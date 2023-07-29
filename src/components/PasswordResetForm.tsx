import React, { useState } from 'react';
import TextInput from './TextInput';
import Button from './Button';
import styles from './PasswordResetForm.module.css';
import Message from './Message';

const PasswordResetForm: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsValid(validatePassword(event.target.value, confirmPassword));
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
    setIsValid(validatePassword(password, event.target.value));
  };

  const validatePassword = (password: string, confirmPassword: string) => {
    // ToDo: Create a separate method to validate.
    // Validate just the length for now
    const isPasswordValid = password.length >= 8

    return isPasswordValid && password === confirmPassword;
  };

  const handleReset = () => {
    alert('Password Reset Successful!');
  };

  return (
    <div className={styles.pwdResetFormContainer}>
        <div className={styles.heading}>
            <h1>Reset password</h1>
        </div>
        <div className={styles.textInput}>
            <TextInput
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
            />
        </div>
        <div className={styles.textInput}>
            <TextInput
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm your password"
            />
        </div>
        <div className={styles.button}>
            <Button disabled={!isValid} onClick={handleReset} buttonText='Reset' />
        </div>
        <div className={styles.messageContainer}>
            {isValid ? 
                <Message type='success' text='Passwords match and meet the requirements!' /> 
                : <Message type='success' text='Passwords do not match or do not meet the requirements.' />}
        </div>
    </div>
  );
};

export default PasswordResetForm;