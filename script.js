function decimalToBinary(decimal) {
  let binary = '';
  while (decimal > 0) {
    // Divide the decimal number by 2 and get the remainder
    const remainder = decimal % 2;
    // Add the remainder to the binary string
    binary = remainder + binary;
    // Divide the decimal number by 2 to get the next quotient
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}


const decimal = 10;
const binary = decimalToBinary(decimal);
console.log(binary); // Output: 1010

