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

const blogForm = document.getElementById("blog-submit");

blogForm.addEventListener("click", function (e) {
  e.preventDefault();
  const titleInput = document.getElementById("title-input");
  const bodyInput = document.getElementById("body-input");
  console.log(titleInput.value);
  console.log(bodyInput.value);
});
