export default function () {
  const nameAttributes = [
    "ratingCourse",
    "ratingExplanation",
    "ratingUnderstanding",
  ];
  // select elements
  const elements = document.querySelectorAll(".radioInputFieldset");
  elements.forEach((element, i) => {
    // create new <range> elements and <p> output counters
    element.innerHTML = `
    <label for="${nameAttributes[i]}" class="rangeCounter" id="rangeCounter${i}">5</label>
    <label for="${nameAttributes[i]}">
    <input type="range" name="${nameAttributes[i]}" min="1" max="10" required id="range${i}"></label>
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
