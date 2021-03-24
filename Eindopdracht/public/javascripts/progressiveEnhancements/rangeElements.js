export default function () {
  // select elements
  const elements = document.querySelectorAll("fieldset");

  console.log(elements);

  elements.forEach((element, i) => {
    element.innerHTML = `<section>
    <p class="rangeCounter id="rangeCounter${i}""></p>
    <input type="range" min="1" max="10">
    </section>
    `;
  });
  // select counters and new RANGE inputs
  const counters = document.querySelectorAll(".rangeCounter");
  const rangeInputs = document.querySelectorAll("input[type=range]");
  console.log(rangeInputs);

  counters.forEach((counter) => {
    const currentValue = document.querySelector(".rangeCounter ~ input");
    console.log(currentValue);
    currentValue.addEventListener("change", (e) => {
      console.log(e.target.value);
      counter.innerHTML = e.target.value;
    });
  });
}
