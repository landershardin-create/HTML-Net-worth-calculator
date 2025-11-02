const cashFlowByMonth = {};

function updateSummary() {
  const month = document.getElementById("month").value;
  const totalIncome = getTotal(inputs.income);
  const totalExpenses = getTotal(inputs.expenses);
  const netCashFlow = totalIncome - totalExpenses;

  cashFlowByMonth[month] = { income: totalIncome, expenses: totalExpenses, net: netCashFlow };

  document.getElementById("summary").textContent =
    `Net Cash Flow for ${month}: $${netCashFlow.toFixed(2)} (${netCashFlow >= 0 ? "Surplus" : "Deficit"})`;
}
