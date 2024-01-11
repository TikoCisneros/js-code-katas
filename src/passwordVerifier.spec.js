import { PasswordVerifier } from "./passwordVerifier";

describe('Password verifier', () => {
  const passVerifier = new PasswordVerifier();
  
  it('should verify if password is null', () => {
    const password = null;
    expect(() => passVerifier.verify(password)).toThrow(Error("password should not be null"));
  });

  it('should throw error if password is not longer than 8 characters', () => {
    const password = '1234567';
    expect(() => passVerifier.verify(password)).toThrow(Error("password should be larger than 8 characters"));
  });

  it('should throw error if password does not have at least one uppercase letter', () => {
    const password = 'abcdefghi';
    expect(() => passVerifier.verify(password)).toThrow(Error("password should have at least one uppercase letter"));
  });

  it('should throw error if password does not have at least one lowercase letter', () => {
    const password = 'ABCDEFGHI';
    expect(() => passVerifier.verify(password)).toThrow(Error("password should have at least one lowercase letter"));
  });

  it('should throw error if password does not have at least one number', () => {
    const password = 'AbCdefghI';
    expect(() => passVerifier.verify(password)).toThrow(Error("password should have at least one number"));
  });

  it('should be valid if passes all validations', () => {
    const password = 'AbCdefgh1';
    expect(() => passVerifier.verify(password)).not.toThrowError();
  });
});