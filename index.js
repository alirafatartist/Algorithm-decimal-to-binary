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

const decimalNumber = Math.ceil(100 * Math.random()); // You can replace this with any decimal number you want to convert
const binaryRepresentation = toBinary(decimalNumber);
console.log(`Binary representation of ${decimalNumber}: ${binaryRepresentation}`);