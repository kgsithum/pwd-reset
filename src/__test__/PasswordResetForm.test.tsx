import { render, fireEvent } from '@testing-library/react';
import PasswordResetForm from '../components/PasswordResetForm';

describe('PasswordResetForm', () => {
  it('should validate and enable the button on entering a valid password and matching confirm password', () => {
    const { getByLabelText, getByText } = render(<PasswordResetForm />);
    const passwordInput = getByLabelText('Password *') as HTMLInputElement;
    const confirmPasswordInput = getByLabelText('Confirm Password *') as HTMLInputElement;
    const resetButton = getByText('Reset') as HTMLButtonElement;

    fireEvent.change(passwordInput, { target: { value: 'ValidPass123!@' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'ValidPass123!@' } });

    expect(passwordInput.value).toBe('ValidPass123!@');
    expect(confirmPasswordInput.value).toBe('ValidPass123!@');
    expect(resetButton.disabled).toBeFalsy();
  });

  it('should validate and disable the button on entering an invalid password', () => {
    const { getByLabelText, getByText } = render(<PasswordResetForm />);
    const passwordInput = getByLabelText('Password *') as HTMLInputElement;
    const confirmPasswordInput = getByLabelText('Confirm Password *') as HTMLInputElement;
    const resetButton = getByText('Reset') as HTMLButtonElement;

    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: '123' } });

    expect(passwordInput.value).toBe('123');
    expect(confirmPasswordInput.value).toBe('123');
    expect(resetButton.disabled).toBeTruthy();
  });

  it('should disable the button when passwords do not match', () => {
    const { getByLabelText, getByText } = render(<PasswordResetForm />);
    const passwordInput = getByLabelText('Password *') as HTMLInputElement;
    const confirmPasswordInput = getByLabelText('Confirm Password *') as HTMLInputElement;
    const resetButton = getByText('Reset') as HTMLButtonElement;

    fireEvent.change(passwordInput, { target: { value: 'ValidPass123!@' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'DifferentPass456' } });

    expect(passwordInput.value).toBe('ValidPass123!@');
    expect(confirmPasswordInput.value).toBe('DifferentPass456');
    expect(resetButton.disabled).toBeTruthy();
  });

});