export function calculatePersonalTab(tabId) {
  const assetIds = [0,1,2,3,4,5].map(i => +document.getElementById(`${tabId}-field-${i}`).value || 0);
  const liabilityIds = [6,7,8].map(i => +document.getElementById(`${tabId}-field-${i}`).value || 0);
  const netWorth = assetIds.reduce((a,b) => a+b,0) - liabilityIds.reduce((a,b) => a+b,0);
  document.getElementById(`${tabId}-result`).innerText = `Net Worth: $${netWorth.toLocaleString()}`;
}

export function calculateBusinessTab(tabId) {
  const assetIds = [0,1,2,3,4,5].map(i => +document.getElementById(`${tabId}-field-${i}`).value || 0);
  const liabilityIds = [6,7,8,9].map(i => +document.getElementById(`${tabId}-field-${i}`).value || 0);
  const netWorth = assetIds.reduce((a,b) => a+b,0) - liabilityIds.reduce((a,b) => a+b,0);
  document.getElementById(`${tabId}-result`).innerText = `Net Worth: $${netWorth.toLocaleString()}`;
}
