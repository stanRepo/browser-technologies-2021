import progressBarFeature from "./progressiveEnhancements/progressBar.js";
import localStorageFeature from "./progressiveEnhancements/localStorage.js";
import rangeElementsFeature from "./progressiveEnhancements/rangeElements.js";
import onlineStatusFeature from "./progressiveEnhancements/onlineStatus.js";

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
};

activateFeatures.rangeElements();
activateFeatures.progressBar();
activateFeatures.localStorage();
activateFeatures.onlineStatus();
