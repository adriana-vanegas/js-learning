const cont = document.querySelector(".container");
document.addEventListener("DOMContentLoaded", function () {
  let list = ["Student A", "Student B", "Student C"];
  let listOutput = "";

  list.forEach((student) => {
    listOutput += `<div class="student" data-id="${student}"> ${student}</div>`;
  });

  cont.innerHTML = listOutput;

  cont.addEventListener("click", function (event) {
    // Find if a student has been clicked
    const studentClicked = event.target.classList.contains("student");

    // If a student was clicked, then output which student
    // If a student wasn't clicked, then output "No student clicked"
    if (studentClicked) {
      //find the ID of the student
      const whichStudent = event.target.dataset.id;
      console.log(`${whichStudent}`);
    } else {
      console.log("No student clicked");
    }
  });
});
