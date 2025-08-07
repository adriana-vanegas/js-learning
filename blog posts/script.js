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
               <p>${item.userID}</p>
               <p>${item.body}</p>
               </div>`)
    );

    postSection.innerHTML = html;
    console.log(html);

    console.log(first5);
  });
