function createIncomeExpenseTab(type) {
  tabCount++;
  const tabId = `${type}-income-${tabCount}`;

  const tabHeader = document.createElement('div');
  tabHeader.className = 'tab';
  tabHeader.id = `tab-${tabId}`;
  tabHeader.setAttribute('data-tab', tabId);
  tabHeader.innerText = `${type.charAt(0).toUpperCase() + type.slice(1)} Income ${tabCount}`;
  tabHeader.onclick = () => switchTab(tabId);
  document.getElementById('tabHeaders').appendChild(tabHeader);

  const tabContent = document.createElement('div');
  tabContent.className = 'tab-content';
  tabContent.id = `content-${tabId}`;
  tabContent.innerHTML = generateIncomeExpenseContent(type, tabId);
  document.getElementById('tabContents').appendChild(tabContent);

  switchTab(tabId);
}

function generateIncomeExpenseContent(type, tabId) {
  const incomeFields = type === 'personal'
    ? ['Salary', 'Side Hustles', 'Investments', 'Other Income']
    : ['Sales Revenue', 'Service Income', 'Royalties', 'Other Income'];

  const expenseFields = type === 'personal'
    ? ['Rent/Mortgage', 'Utilities', 'Groceries', 'Transportation', 'Entertainment', 'Other Expenses']
    : ['Salaries', 'Marketing', 'Software Tools', 'Office Rent', 'Travel', 'Other Expenses'];

  const incomeInputs = incomeFields.map((label, i) => {
    const id = `${tabId}-income-${i}`;
    return `<label>${label}: <input type="number" id="${id}" /></label>`;
  }).join('');

  const expenseInputs = expenseFields.map((label, i) => {
    const id = `${tabId}-expense-${i}`;
    return `<label>${label}: <input type="number" id="${id}" /></label>`;
  }).join('');

  return `
    <h2>${type.charAt(0).toUpperCase() + type.slice(1)} Income & Expense</h2>
    <h3>Income</h3>
    ${incomeInputs}
    <h3>Expenses</h3>
    ${expenseInputs}
    <button class="calculate" onclick="calculateIncomeExpense('${tabId}', ${incomeFields.length}, ${expenseFields.length})">Calculate</button>
    <h3 id="${tabId}-result">Net Income: $0</h3>
  `;
}

function calculateIncomeExpense(tabId, incomeCount, expenseCount) {
  const incomeTotal = Array.from({length: incomeCount}, (_, i) =>
    +document.getElementById(`${tabId}-income-${i}`).value || 0
  ).reduce((a, b) => a + b, 0);

  const expenseTotal = Array.from({length: expenseCount}, (_, i) =>
    +document.getElementById(`${tabId}-expense-${i}`).value || 0
  ).reduce((a, b) => a + b, 0);

  const netIncome = incomeTotal - expenseTotal;
  document.getElementById(`${tabId}-result`).innerText = `Net Income: $${netIncome.toLocaleString()}`;
}
