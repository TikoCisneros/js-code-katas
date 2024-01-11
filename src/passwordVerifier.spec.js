import { PasswordVerifier } from "./passwordVerifier";

describe('Password verifier', () => {
  it('should verify if password is null', () => {
    const password = null;
    const passVerifier = new PasswordVerifier();
    expect(() => passVerifier.verify(password)).toThrow(Error("password should not be null"));
  });

  it('should throw error if password is not longer than 8 characters', () => {
    const password = null;
    const passVerifier = new PasswordVerifier();
    expect(() => passVerifier.verify(password)).toThrow(Error("password should be larger than 8 chars"));
  });
});