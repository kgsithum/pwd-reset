import { validatePassword } from '../utils/Validations';

describe('validatePassword', () => {
  it('should return true for valid passwords', () => {
    expect(validatePassword('ValidPass123!@')).toBe(true);
    expect(validatePassword('AnotherValidPassword$123')).toBe(true);
    expect(validatePassword('LongValidPasswordWithoutSpecialCharacters123')).toBe(true);
  });

  it('should return false for invalid passwords', () => {
    // Passwords less than 8 characters
    expect(validatePassword('Weak')).toBe(false);
    expect(validatePassword('NoNumSpChars')).toBe(false);

    // Passwords without special characters
    expect(validatePassword('NoSpChar123')).toBe(false);

    // Passwords without numbers
    expect(validatePassword('NoNum@SpChar')).toBe(false);

    // Passwords without letters
    expect(validatePassword('1234!@#$')).toBe(false);
  });

  it('should return true for passwords greater than 15 characters', () => {
    expect(validatePassword('VeryLongPasswordWithoutSpecialCharacters1234')).toBe(true);
    expect(validatePassword('LongPasswordWith!@#$Numbers1234')).toBe(true);
  });
});