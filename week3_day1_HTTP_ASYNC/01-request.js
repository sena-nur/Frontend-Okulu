document.getElementById("data").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else if (xhr.status === 404) {
        console.log("Error 404: File not found");
      } else {
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
      }
    }
  };

  xhr.open("GET", "text.txt", true);
  xhr.send();
});
