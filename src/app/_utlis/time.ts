const getCurrentDate = (): string => {
  const now = new Date();

  const currTime = now.toLocaleTimeString();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const formattedDate = `${currTime}, ${year}/${month}/${day}`;
  return formattedDate;
};

export { getCurrentDate };
