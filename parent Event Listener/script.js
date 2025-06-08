document.addEventListener("DOMContentLoaded", function () {
  ////////////////////////////////////

  // Parent Event Listener for Divs //

  ////////////////////////////////////

  const cont = document.querySelector(".container-button");
  let listOutput = "";

  let list = ["Student A", "Student B", "Student C"];

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

  //////////////////////////////////////////////

  // Parent Event Listener for Inner Buttons //

  /////////////////////////////////////////////

  let containerInnerBtn = document.querySelector(".container-inner-button");
  let assignmentOutput = "";

  let assignments = [
    { id: "1749349081506", name: "Homework #1" },
    { id: "1749349098586", name: "Homework #2" },
    { id: "1749349112675", name: "Homework #3" },
  ];

  assignments.forEach((assignment) => {
    assignmentOutput += `
      <div class="assignment">
        ${assignment.name}
        <div class="button-container">
          <button class="assign-btn" data-id="${assignment.id}" data-action="view">View</button>
          <button class="assign-btn" data-id="${assignment.id}" data-action="assign">Assign</button>
        </div>
      </div>
    `;
  });

  containerInnerBtn.innerHTML = assignmentOutput;

  containerInnerBtn.addEventListener("click", function (event) {
    const innerBtnClicked = event.target.closest("button");

    if (innerBtnClicked) {
      const action = innerBtnClicked.dataset.action;
      const id = innerBtnClicked.dataset.id;

      if (action === "view") {
        console.log(`View ${id}`);
      } else if (action === "assign") {
        console.log(`Assign ${id}`);
      }
    }
  });
});
