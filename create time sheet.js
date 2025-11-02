function createTimesheetTab() {
  tabCount++;
  const tabId = `timesheet-${tabCount}`;

  // Create tab header
  const tabHeader = document.createElement('div');
  tabHeader.className = 'tab';
  tabHeader.id = `tab-${tabId}`;
  tabHeader.setAttribute('data-tab', tabId);
  tabHeader.innerText = `Timesheet ${tabCount}`;
  tabHeader.onclick = () => switchTab(tabId);
  document.getElementById('tabHeaders').appendChild(tabHeader);

  // Create tab content
  const tabContent = document.createElement('div');
  tabContent.className = 'tab-content';
  tabContent.id = `content-${tabId}`;
  tabContent.innerHTML = `
    <h2>🕒 Timesheet Tracker</h2>
    <table id="${tabId}-table">
      <thead>
        <tr><th>Date</th><th>Project</th><th>Hours</th></tr>
      </thead>
      <tbody></tbody>
    </table>
    <button onclick="addTimesheetRow('${tabId}')">➕ Add Entry</button>
    <h3 id="${tabId}-total">Total Hours: 0</h3>
  `;
  document.getElementById('tabContents').appendChild(tabContent);

  switchTab(tabId);
}

function addTimesheetRow(tabId) {
  const tbody = document.querySelector(`#${tabId}-table tbody`);
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><input type="date" onchange="updateTimesheetTotal('${tabId}')" /></td>
    <td><input type="text" placeholder="Project" /></td>
    <td><input type="number" min="0" max="24" value="0" onchange="updateTimesheetTotal('${tabId}')" /></td>
  `;
  tbody.appendChild(row);
}

function updateTimesheetTotal(tabId) {
  const rows = document.querySelectorAll(`#${tabId}-table tbody tr`);
  let total = 0;
  rows.forEach(row => {
    const hours = parseFloat(row.querySelector("input[type='number']").value) || 0;
    total += hours;
  });
  document.getElementById(`${tabId}-total`).innerText = `Total Hours: ${total}`;
}
