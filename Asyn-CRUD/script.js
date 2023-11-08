// Fetch posts from API or Local Storage
async function fetchPosts() {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  if (posts.length < 1) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`); //?_page=${start}&_limit=${limit}`);
    const data = await response.json();
    posts = [...data];
    localStorage.setItem("posts", JSON.stringify(data));
  }
  renderPosts(posts);
  console.log("Fetch post data", posts);
}

// render posts to DOM
function renderPosts(data) {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = data
    .map(
      (post, index) =>
        `<div class="card mt-3">
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.body}</p>
            <button onclick="deletePost(${post.id}, ${index})" class="btn btn-danger">Delete</button>
        </div>
    </div>`
    )
    .join("");
}

async function deletePost(id, index) {
  // alert(`Delete post clicked ID: ${id}, INDEX: ${index}.`);
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      // Remove the post from the local storage as well
      let posts = JSON.parse(localStorage.getItem("posts"));
      posts.splice(index, 1);
      localStorage.setItem("posts", JSON.stringify(posts));
      fetchPosts();
    }
  } catch (error) {
    console.error("Failed to delete post:", error);
  }
}

//Create a new post
async function createPost() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const newPost = { userId: 1, title, body };
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
  const data = await response.json();
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.unshift(data);
  localStorage.setItem("posts", JSON.stringify(posts));
  renderPosts(posts);
}

fetchPosts();
