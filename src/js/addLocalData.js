export function addLocalData(key) {
  const localData = JSON.parse(localStorage.getItem(key));

  if (!localData) return [];
  return localData;
}
