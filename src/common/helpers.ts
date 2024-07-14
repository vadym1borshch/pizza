export const gettingFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  } else {
    console.warn("Could not get local storage");
    return null;
  }
};
