class Request {
  static async get(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Veri alınamadı" + response.status);
    }

    return await response.json();
  }
  static async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json;",
      },
    });
    if (!response.ok) {
      throw new Error("Veri alınamadı" + response.status);
    }

    return await response.json();
  }
  static async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json;",
      },
    });
    if (!response.ok) {
      throw new Error("Veri alınamadı" + response.status);
    }

    return await response.json();
  }
  static async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Veri alınamadı" + response.status);
    }

    return await response.json();
  }
}

// Request.get("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// Request.post("https://jsonplaceholder.typicode.com/posts", {
//   userId: 1,
//   title: "Post Başlık",
//   body: "Post Body",
// })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// Request.put("https://jsonplaceholder.typicode.com/posts/1", {
//   userId: 1,
//   title: "Post Başlık fdherty",
//   body: "Post Body dyjdtjty",
// })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// Request.delete("https://jsonplaceholder.typicode.com/posts/2")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// Request.get("http://localhost:3000/users")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

Request.post("http://localhost:3000/users", {
  name: "Varol",
  department: "Deneme",
  salary: "651651",
})
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
