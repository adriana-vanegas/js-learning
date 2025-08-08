fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => {
    let html = "";
    const postSection = document.querySelector(".post-section");

    let posts = data;
    let first5 = posts.slice(0, 5);

    first5.forEach(
      (item) =>
        (html += `<div class="post" data-id = ${item.id}>
               <h2>${item.title}</h2>
               <p>${item.userId}</p>
               <p>${item.body}</p>
               </div>`)
    );

    postSection.innerHTML = html;
    // console.log(html);

    // console.log(first5);
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
    .then((data) => console.log(data));
});
