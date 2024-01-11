import { PasswordVerifier } from "./passwordVerifier";

describe('Password verifier', () => {
  const passVerifier = new PasswordVerifier();
  
  it('should verify if password is null', () => {
    const password = null;
    expect(() => passVerifier.verify(password)).toThrow(Error("password should not be null"));
  });

  it('should throw error if password is not longer than 8 characters', () => {
    const password = '1234567';
    expect(() => passVerifier.verify(password)).toThrow(Error("password should be larger than 8 chars"));
  });

  it('should throw error if password does not have at least one uppercase letter', () => {
    const password = 'abcdefghi';
    expect(() => passVerifier.verify(password)).toThrow(Error("password should have one uppercase letter at least"));
  });
});