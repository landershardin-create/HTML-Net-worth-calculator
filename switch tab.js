let tabCount = 0;

function switchTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  document.getElementById(`tab-${tabId}`).classList.add('active');
  document.getElementById(`content-${tabId}`).classList.add('active');
}

function createTab(type) {
  tabCount++;
  const tabId = `${type}-${tabCount}`;

  // Create tab header
  const tabHeader = document.createElement('div');
  tabHeader.className = 'tab';
  tabHeader.innerText = `${type.charAt(0).toUpperCase() + type.slice(1)} ${tabCount}`;
  tabHeader.setAttribute('data-tab', tabId);
  tabHeader.onclick = () => switchTab(tabId);
  document.getElementById('tabHeaders').appendChild(tabHeader);

  // Create tab content
  const tabContent = document.createElement('div');
  tabContent.className = 'tab-content';
  tabContent.id = `content-${tabId}`;
  tabContent.innerHTML = generateTabContent(type, tabId);
  document.getElementById('tabContents').appendChild(tabContent);

  switchTab(tabId);
}

function generateTabContent(type, tabId) {
  const fields = type === 'personal'
    ? ['Cash & Bank', 'Investments', 'Real Estate', 'Vehicles', 'Business Equity', 'Personal Property', 'Mortgage', 'Credit Card Debt', 'Other Liabilities']
    : ['Cash & Accounts', 'Equipment', 'IP & Codebases', 'Branding Assets', 'Web Properties', 'Receivables', 'Startup Costs', 'Contributor Payouts', 'Software Licenses', 'Business Credit'];

  const inputs = fields.map((label, i) => {
    const id = `${tabId}-field-${i}`;
    return `<label>${label}: <input type="number" id="${id}" /></label>`;
  }).join('');

  const calcFn = type === 'personal' ? 'calculatePersonalTab' : 'calculateBusinessTab';

  return `
    <h2>${type.charAt(0).toUpperCase() + type.slice(1)} Net Worth</h2>
    ${inputs}
    <button onclick="${calcFn}('${tabId}')">Calculate</button>
    <h3 id="${tabId}-result">Net Worth: $0</h3>
  `;
}

function calculatePersonalTab(tabId) {
  const assetIds = [0,1,2,3,4,5].map(i => +document.getElementById(`${tabId}-field-${i}`).value);
  const liabilityIds = [6,7,8].map(i => +document.getElementById(`${tabId}-field-${i}`).value);
  const netWorth = assetIds.reduce((a,b) => a+b,0) - liabilityIds.reduce((a,b) => a+b,0);
  document.getElementById(`${tabId}-result`).innerText = `Net Worth: $${netWorth.toLocaleString()}`;
}

function calculateBusinessTab(tabId) {
  const assetIds = [0,1,2,3,4,5].map(i => +document.getElementById(`${tabId}-field-${i}`).value);
  const liabilityIds = [6,7,8,9].map(i => +document.getElementById(`${tabId}-field-${i}`).value);
  const netWorth = assetIds.reduce((a,b) => a+b,0) - liabilityIds.reduce((a,b) => a+b,0);
  document.getElementById(`${tabId}-result`).innerText = `Net Worth: $${netWorth.toLocaleString()}`;
}
