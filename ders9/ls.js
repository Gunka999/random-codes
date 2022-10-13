class LS {
  getLocalStorage() {
    let arr;
    if (localStorage.getItem("task") === null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("task"));
    }

    return arr;
  }

  setLocalStorage(data) {
    const arr = this.getLocalStorage();

    arr.push(data);

    localStorage.setItem("task", JSON.stringify(arr));
  }
}

export default LS;
