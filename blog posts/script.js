const postSection = document.querySelector(".post-section");

let postsArray = [];

function renderPosts(array) {
  let html = "";
  array.forEach(
    (item) =>
      (html += `<div class="post" data-id = ${item.id}>
               <h2>${item.title}</h2>
               <p>${item.userId}</p>
               <p>${item.body}</p>
               </div>`)
  );
  postSection.innerHTML = html;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPosts(postsArray);
    console.log(postsArray);
  });

// It has to be the form, not the button
const blogForm = document.getElementById("blog");

blogForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const titleInput = document.getElementById("title-input").value;
  const bodyInput = document.getElementById("body-input").value;

  const input = { title: titleInput, body: bodyInput };

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  })
    .then((response) => response.json())
    // Data shows you what you just posted!
    .then((data) => {
      postsArray.unshift(data);
      // console.log(postsArray);
      renderPosts(postsArray);
    });

  blogForm.reset();
});
