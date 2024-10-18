export const generateId = (prefix: string, list: string[]): string => {
  const nextId = list.length + 1;

  const numberOfDigits = nextId.toString().length;
  const formattedId = `${prefix}${String(nextId).padStart(
    numberOfDigits,
    "0"
  )}`;
  return formattedId;
};
