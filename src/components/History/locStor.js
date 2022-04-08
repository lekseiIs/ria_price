function addToLocalStorage(obj) {
  if (!localStorage.getItem('serchByID')) {
    localStorage.setItem('serchByID', JSON.stringify([obj]));
  } else {
    const ls = localStorage.getItem('serchByID');
    const parseDataFromLocalStorage = JSON.parse(ls);
    parseDataFromLocalStorage.unshift(obj);
    if (parseDataFromLocalStorage.length >= 6) {
      parseDataFromLocalStorage.pop();
    }
    localStorage.setItem('serchByID', JSON.stringify(parseDataFromLocalStorage));
  }
}

export default {
  addToLocalStorage,
};
