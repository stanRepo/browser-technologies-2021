export default function () {
  const inputElements = document.querySelectorAll(
    'input[type="text"], select, input[type="week"], textarea, input[type="range"], input[type="radio"]'
  );
  deleteFormHistory();
  renderFormHistory();
  saveFormHistory();

  function renderFormHistory() {
    let formHistory = localStorage.getItem("formHistory");

    if (formHistory) {
      // see if theres an existing history stored
      formHistory = JSON.parse(formHistory); //
      inputElements.forEach((el, i) => {
        // loop through the inputElements
        if (formHistory.hasOwnProperty(el.name)) {
          // check if input attribute name exists as key in stored object
          el.value = formHistory[el.name]; // set input elements value to the stored formHistory value
          if (el.type === "range") {
            const rangeCounter = document.querySelector(
              `#rangeCounter${i - 3}`
            );
            console.log(i);
            console.log(rangeCounter);
            rangeCounter.innerHTML = `${formHistory[el.name]}`;
          }
        }
      });
    }
  }

  function saveFormHistory() {
    // check correct href location
    if (window.location.pathname === "/startEnquete") {
      // select all required input elements ofr the enquete
      inputElements.forEach((el) => {
        el.addEventListener("change", (e) => {
          let formHistory = localStorage.getItem("formHistory");
          // if history exists do this
          if (formHistory) {
            formHistory = JSON.parse(formHistory);
            formHistory[e.target.name] = e.target.value;
            localStorage.setItem("formHistory", JSON.stringify(formHistory));
          } else {
            // if no history exists yet do this
            // assemble obj
            let obj = { [e.target.name]: e.target.value };
            localStorage.setItem("formHistory", JSON.stringify(obj));
          }
        });
      });
    }
  }

  function deleteFormHistory() {
    console.log("activeDeleteHistory");
    if (window.location.pathname === "/sendEnquete") {
      localStorage.removeItem("formHistory");
    }
  }
}
