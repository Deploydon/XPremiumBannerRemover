function removeNag() {
  const element = document.querySelector('aside[aria-label="Renew your Premium subscription"]');
  if (element) {
    element.remove();
  }
}

removeNag();

const observer = new MutationObserver(removeNag);
observer.observe(document.body, { childList: true, subtree: true });