function getAllData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === "number") {
        resolve(data * 2);
      } else {
        reject("Lütfen Sayı Giriniz!");
      }
    }, 2000);
  });
}

getAllData(10)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
