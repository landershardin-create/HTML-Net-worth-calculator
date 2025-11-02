export function addTimesheetRow(tabId) {
  const tbody = document.querySelector(`#${tabId}-table tbody`);
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><input type="date" onchange="updateTimesheetTotal('${tabId}')" /></td>
    <td><input type="text" placeholder="Project" /></td>
    <td><input type="number" min="0" max="24" value="0" onchange="updateTimesheetTotal('${tabId}')" /></td>
  `;
  tbody.appendChild(row);
}

export function updateTimesheetTotal(tabId) {
  const rows = document.querySelectorAll(`#${tabId}-table tbody tr`);
  let total = 0;
  rows.forEach(row => {
    const hours = parseFloat(row.querySelector("input[type='number']").value) || 0;
    total += hours;
  });
  document.getElementById(`${tabId}-total`).innerText = `Total Hours: ${total}`;
}
