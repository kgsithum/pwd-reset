import React, { useState } from 'react';
import TextInput from './TextInput';
import Button from './Button';
import styles from './PasswordResetForm.module.css';
import Message from './Message';
import { MessageType } from '../types/MessageType';
import { InputType } from '../types/InputType';
import { validatePassword } from '../utils/Validations';

const PasswordResetForm: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsValid(validate(event.target.value, confirmPassword));
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
    setIsValid(validate(password, event.target.value));
  };

  const validate = (password: string, confirmPassword: string) => {
    // Validate password
    const isPasswordValid = validatePassword(password);
    setDisplayMessage(isPasswordValid, password, confirmPassword);

    return isPasswordValid && password === confirmPassword;
  };

  const setDisplayMessage = (isPasswordValid: boolean, password: string, confirmPassword: string): void => {
    let msg = '';
    if (isPasswordValid) {
        if (password === confirmPassword) {
            msg = 'Password match and meet the requirements!';
        } else {
            msg = 'Incorrect confirm new password.';
        }
    } else {
        msg = 'Password does not meet the requirements.';
    }
    setMessage(msg);
  };

  const handleReset = () => {
    if (isValid) {
        // Handle backend API request at this point
        alert('Password Reset Successful!');
    }
  };

  return (
    <div className={styles.pwdResetFormContainer}>
        <div className={styles.heading}>
            <h1>Reset password</h1>
        </div>
        <div className={styles.textInput}>
            <label htmlFor="password">Password *</label>
            <TextInput
                type={InputType.PASSWORD}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                id='password'
            />
        </div>
        <div className={styles.textInput}>
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <TextInput
                type={InputType.PASSWORD}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm your password"
                id="confirmPassword"
            />
        </div>
        <div className={styles.button}>
            <Button disabled={!isValid} onClick={handleReset} buttonText='Reset' />
        </div>
        {message &&
        <div className={styles.messageContainer}>
            <Message type={isValid ? MessageType.SUCCESS : MessageType.ERROR} text={message} /> 
        </div>
        }
        <div className={styles.hintText}>
            <p>Hint: At least 8 characters, including one number and two special characters, or be greater than 15 characters.</p>
        </div>
    </div>
  );
};

export default PasswordResetForm;