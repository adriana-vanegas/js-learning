function faviconURL(u) {
  const url = new URL(chrome.runtime.getURL("/_favicon/"));
  url.searchParams.set("pageUrl", u);
  url.searchParams.set("size", "32");
  return url.toString();
}

const img = document.createElement("img");
img.src = faviconURL("https://www.google.com");
document.body.appendChild(img);
