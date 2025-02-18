chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchSelectedText",
    title: chrome.i18n.getMessage("contextMenuTitle"),
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  const selectedText = info.selectionText;
  // Update the following line with your own epic report URL
  const searchURL = `https://company.atlassian.net/jira/software/c/projects/PROJECT/boards/123/reports/epic-burndown?epic=${encodeURIComponent(selectedText)}`;
  chrome.tabs.create({ url: searchURL });
});

