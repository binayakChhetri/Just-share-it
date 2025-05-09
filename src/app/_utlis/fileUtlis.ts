export const bytesToMb = (size: number): number => {
  const convertedSize = size / (1000 * 1000);
  return Number(convertedSize.toFixed(2));
};
