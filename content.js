const images = document.querySelectorAll("img");

images.forEach((img) => {
    if (img.src.includes("https://corcsprd.peoplesoft.cornell.edu/cs/corcscss/cache_86015/PT_NAV_GO_1.gif")) { // Replace with your condition
      img.src = chrome.runtime.getURL("images/Right-Arrow.png"); // Local image
    }

    if (img.src.includes("https://corcsprd.peoplesoft.cornell.edu/cs/corcscss/cache_86015/PT_NAV_GO_1.gif")) {
      img.src = chrome.runtime.getURL("images/Right-Arrow.png"); // Local image

    }
});
