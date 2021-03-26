export default function () {
  const parentFieldset = document.querySelector("#dateFieldset");
  const inputDateNumberElements = document.querySelectorAll(
    ".inputDateNumberElements"
  );

  inputDateNumberElements.forEach((el) => {
    parentFieldset.removeChild(el);
  });
  const newElement = `<input type="date" name="dateOfBirth" id="dateOfBirth" />`;
  parentFieldset.insertAdjacentHTML("beforeend", newElement);
}
