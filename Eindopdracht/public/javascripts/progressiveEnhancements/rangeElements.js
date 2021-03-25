export default function () {
  const nameAttributes = [
    "ratingCourse",
    "ratingExplanation",
    "ratingUnderstanding",
  ];
  // select elements
  const elements = document.querySelectorAll("fieldset");
  elements.forEach((element, i) => {
    // create new <range> elements and <p> output counters
    element.innerHTML = `
    <p class="rangeCounter" id="rangeCounter${i}">5</p>
    <input type="range" name="${nameAttributes[i]}" min="1" max="10" required id="range${i}">
    `;
  });
  // select counters
  const counters = document.querySelectorAll(".rangeCounter");
  // loop over counters
  counters.forEach((counter, i) => {
    const thisInput = document.querySelector(`#range${i}`); // select input element <range>
    const thisOutput = counter; // for readability only
    thisInput.addEventListener("input", (e) => {
      // add event that fires on user input
      thisOutput.innerHTML = e.target.value; // set the counter to the input value
    });
  });
}
