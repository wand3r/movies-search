export const uniq = <T>(xs: T[]): T[] => {
  const result = new Set<T>(xs);
  return [...result];
};
