function decimalToBinary(decimalNumber) {
  // initialize variables
  let binaryNumber = "";
  let quotient = decimalNumber;

  // perform division until quotient is zero
  while (quotient !== 0) {
    // calculate remainder
    let remainder = quotient % 2;

    // add remainder to binary number
    binaryNumber = remainder.toString() + binaryNumber;

    // divide quotient by 2
    quotient = Math.floor(quotient / 2);
  }

  // return binary number as a string
  return binaryNumber;
}
