export default function () {
  // select elements
  const container = document.querySelector("#progressBarContainer");
  const bar = document.querySelector("#progressBar");
  const inputFields = document.querySelectorAll("input, select, textarea");
  let count = 1;

  // show progress bar
  container.style.display = "block";

  // give all input fields an event listener
  inputFields.forEach((input) => {
    input.addEventListener("change", (e) => {
      console.log("lost focus");
      // if the value was previously empty

      // see if its not empty anymore
      if (e.target.value !== "") {
        console.log(count);
        // increase progressbar width
        bar.style.width = count * 15 + "%";
        count++;
      }
    });
  });
}
