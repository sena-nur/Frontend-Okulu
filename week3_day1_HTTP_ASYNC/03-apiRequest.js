document.getElementById("data").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = function () {
    const output = document.getElementById("output");
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      data.forEach((post) => {
        console.log(post);

        output.innerHTML += ` <div>
        <h2>Title: ${post.title}</h2>
        <p>Content: ${post.body}</p>
        </div>
          </div>`;
      });
    } else {
      console.log("Bir Hata Olustu!");
    }
  };
  xhr.send();
});
