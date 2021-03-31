import progressBarFeature from "./progressiveEnhancements/progressBar.js";
import localStorageFeature from "./progressiveEnhancements/localStorage.js";
import rangeElementsFeature from "./progressiveEnhancements/rangeElements.js";
import onlineStatusFeature from "./progressiveEnhancements/onlineStatus.js";
import replaceInputDateFeature from "./progressiveEnhancements/replaceInputDate.js";

const activateFeatures = {
  progressBar: () => {
    if ("onscroll" in window) {
      progressBarFeature();
    }
  },
  localStorage: () => {
    if ("localStorage" in window) {
      localStorageFeature();
    }
  },
  rangeElements: () => {
    rangeElementsFeature();
  },
  onlineStatus: () => {
    if ("navigator" in window) {
      onlineStatusFeature();
    }
  },
  replaceInputDate: () => {
    if (window.screen.width >= 380) {
      replaceInputDateFeature();
    }
  },
};

activateFeatures.rangeElements();
activateFeatures.progressBar();
activateFeatures.localStorage();
activateFeatures.onlineStatus();
// activateFeatures.replaceInputDate(); // currently OFF, safari does not include a proper Native Elements
