export default function appendToEachArrayValue(array, appendString) {
  const someArray = [];
  for (const idx of array) {
    someArray.push(appendString + idx);
  }

  return someArray;
}
