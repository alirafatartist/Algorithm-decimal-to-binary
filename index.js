// algorithm 1
toBinary = (decmial) => {
  const length = Math.ceil(Math.log2(decmial));
  let binary = new Array(length).fill("0");
  while (decmial > 0) {
    const index = Math.floor(Math.log2(decmial));
    binary[index] = "1";
    decmial -= 2 ** index;
  }
  return binary.reverse().join("");
};

const decimalNumber = Math.ceil(100 * Math.random()); 
const binaryRepresentation = toBinary(decimalNumber);
console.log(`Binary representation of ${decimalNumber}: ${binaryRepresentation}`);


// algorithm 1
function decimalToBinary(decimalNumber) {
  if (decimalNumber === 0) {
    return '0';
  }

  let binaryResult = '';
  while (decimalNumber > 0) {
    const remainder = decimalNumber % 2;
    binaryResult = remainder + binaryResult;
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  return binaryResult;
}

// Example usage:
const decimalNumber = 23;
const binaryRepresentation = decimalToBinary(decimalNumber);
console.log(`Binary representation of ${decimalNumber}: ${binaryRepresentation}`);
