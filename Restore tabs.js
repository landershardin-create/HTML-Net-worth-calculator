window.addEventListener("DOMContentLoaded", () => {
  const tabs = JSON.parse(localStorage.getItem("dashboardTabs") || "[]");
  tabs.forEach(({ tabId, type }) => {
    createTab(type, tabId); // Modify createTab to accept tabId
  });
});
