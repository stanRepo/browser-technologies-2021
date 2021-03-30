export default function () {
  window.addEventListener("load", (e) => {
    const el = document.querySelector("#submitEnqueteButton");
    if (el) {
      renderBanner();
      // check if submit button exists on this page
      el.addEventListener("mouseover", (e) => {
        timeLoop();
      });
    }
  });
}

function renderBanner() {
  let section = document.querySelector(".offlineBannerSection");
  const el = `<div class="offlineBanner">
  <h3>Oops, zo te zien heb je geen internetverbinding. </h3> 
  <p> We hebben je enquete wel hier opgeslagen.
  Wanneer je terugkomt op deze pagina met een internetverbinding kun je hem opnieuw verzenden.
  Ook bewaren we wat je verder invult :D
  </p>
</div>`;
  section.insertAdjacentHTML("beforeend", el);
}
function timeLoop(bool) {
  // check on interval if connection is established

  setInterval(() => {
    fetchAndShowBanner();
  }, 3000);
}

function fetchAndShowBanner() {
  // check if there is an internet connection
  const req = fetch("/")
    .then((res) => {
      hideOfflineBanner();
      return res;
    })
    .catch((e) => {
      // fetch failed so there is probably no connection
      console.log(e);
      console.log("no connection was made, show banner");
      const banner = document.querySelector(".offlineBanner");
      banner.classList.add("slideOfflineBanner");

      // hide banner when internet connection returns
    });
}

async function hideOfflineBanner() {
  const el = document.querySelector(".offlineBanner");
  if (el.hasAttribute("class", "slideOfflineBanner")) {
    el.classList.remove("slideOfflineBanner");
  }
}
