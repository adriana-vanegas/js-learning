const pictures = [
  {
    name: "Asana",
    pic: "Asana.svg",
    url: "asana.com",
  },
  {
    name: "Atlassian",
    pic: "Atlassian.svg",
    url: "id.atlassian.com",
  },
  {
    name: "AWS",
    pic: "AWS.svg",
    url: "aws.amazon.com",
  },
];

const testURL = "https://aws.amazon.com/console/";

const div = document.querySelector(".image");

pictures.forEach((pic) => {
  if (testURL.includes(pic["url"])) {
    const pictureLink = pic["pic"];
    const pictureName = pic["name"];
    // document.write(pictureLink);
    div.innerHTML = `<img src="${pictureLink}" alt="${pictureName}">`;
  }
});
