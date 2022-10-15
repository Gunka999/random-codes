class LS {
  getLS() {
    let arr;
    if (localStorage.getItem("person") === null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("person"));
    }
    return arr;
  }

  setLS(obj) {
    let arr = this.getLS();
    arr.push(obj);

    localStorage.setItem("person", JSON.stringify(arr));
  }
  deletFromLS(id) {
    const arr = this.getLS();
    const newArr = arr.filter(el => el.inputID !== id);
    localStorage.setItem("person", JSON.stringify(newArr));
  }
  updateFromLS(obj, id) {
    const data = this.getLS();
    for (let i = 0; i < data.length; i++) {
      if (data[i].inputID == id) {
        data[i] = obj;
      }
    }
    localStorage.setItem("person", JSON.stringify(data));
  }
}

export default LS;
