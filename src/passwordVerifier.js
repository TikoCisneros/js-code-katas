/**
Source: http://osherove.com/tdd-kata-3-refactoring/
--------------------------------------------------------------------------
Create a Password verifications class called “PasswordVerifier”.

1. Add the following verifications to a master function called “Verify()”

  A. - password should be larger than 8 chars
  B. - password should not be null
  C. - password should have one uppercase letter at least
  D. - password should have one lowercase letter at least
  E. - password should have one number at least

  Each one of these should throw an exception with a different message of your choosing

2. Add feature: Password is OK if at least three of the previous conditions is true
3. Add feature: password is never OK if item 1.4 is not true.
*/

export class PasswordVerifier {
  verify(password) {
    if (!password) {
      throw Error("password should not be null")
    }

    if (password.length <= 8) {
      throw Error("password should be larger than 8 chars")
    }
    
    if (password.toLowerCase() === password) {
      throw Error("password should have one uppercase letter at least")
    }
    
    throw Error("password should have one lowercase letter at least")
  }
}