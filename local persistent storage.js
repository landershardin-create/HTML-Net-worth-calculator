function saveTabState(tabId, type) {
  const tabs = JSON.parse(localStorage.getItem("dashboardTabs") || "[]");
  tabs.push({ tabId, type });
  localStorage.setItem("dashboardTabs", JSON.stringify(tabs));
}
