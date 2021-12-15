chrome.commands.onCommand.addListener((shortcut) => {
  if (shortcut.includes("+E")) {
    chrome.runtime.reload();
  }
});
