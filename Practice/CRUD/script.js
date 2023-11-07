// The limit for the number of posts per page
const limit = 3;
let currentPage = 1;

// Fetch posts from the API or from local storage
async function fetchPosts(page) {
  // Calculate the slice of posts to display
  const start = (page - 1) * limit;
  const end = page * limit;

  // Retrieve or fetch posts
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  if (posts.length < end) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      );
      const newPosts = await response.json();
      posts = posts.concat(newPosts);
      localStorage.setItem("posts", JSON.stringify(posts));
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      return;
    }
  }
  renderPosts(posts.slice(start, end));
  renderPagination(posts.length);
}

// Render posts to the DOM
function renderPosts(posts) {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";
  posts.forEach((post, index) => {
    postsContainer.innerHTML += `
          <div class="card mt-3">
              <div class="card-body">
                  <h5 class="card-title">${post.title}</h5>
                  <p class="card-text">${post.body}</p>
                  <button onclick="deletePost(${post.id}, ${index})" class="btn btn-danger">Delete</button>
              </div>
          </div>
      `;
  });
}

// Change page function
function changePage(newPage) {
  if (newPage < 1) return; // Prevent going to non-existing negative pages
  currentPage = newPage;
  fetchPosts(currentPage);
}

// Render the pagination buttons
function renderPagination(totalPosts) {
  const totalPages = Math.ceil(totalPosts / limit);
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = `
      <button onclick="changePage(${
        currentPage - 1
      })" class="btn btn-primary" ${
    currentPage === 1 ? "disabled" : ""
  }>Previous</button>
      <span>Page ${currentPage}</span>
      <button onclick="changePage(${
        currentPage + 1
      })" class="btn btn-primary" ${
    currentPage >= totalPages ? "disabled" : ""
  }>Next</button>
  `;
}

// Create a new post
async function createPost() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  const newPost = {
    userId: 1,
    title: title,
    body: body,
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const post = await response.json();
    // Assuming that we just add the new post at the beginning of our local list
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.unshift(post); // Add to the start of the array
    localStorage.setItem("posts", JSON.stringify(posts));

    // Re-fetch posts to update the list
    fetchPosts(currentPage);
  } catch (error) {
    console.error("Failed to create post:", error);
  }
}

// Delete a post
async function deletePost(id, index) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      // Remove the post from local storage as well
      let posts = JSON.parse(localStorage.getItem("posts"));
      posts.splice(index, 1);
      localStorage.setItem("posts", JSON.stringify(posts));

      // Update the post display
      fetchPosts(currentPage);
    } else {
      console.error("Failed to delete post:", response.status);
    }
  } catch (error) {
    console.error("Failed to delete post:", error);
  }
}

// Initial fetch of posts
fetchPosts(currentPage);
