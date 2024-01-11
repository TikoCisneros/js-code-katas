describe('Password verifier', () => {
  it('should verify if password is null', () => {
    const password = null;
    const passVerifier = new PasswordVerifier();
    expect(() => passVerifier.verify(password)).toThrow(Error("password should not be null"));
  });
});