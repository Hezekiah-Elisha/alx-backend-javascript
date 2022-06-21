export default function setFromArray(arg) {
  if (arg instanceof Array) {
    return new Set(arg);
  }
  return {};
}
