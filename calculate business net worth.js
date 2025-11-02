function calculateBusinessNetWorth() {
  const assets = [
    +document.getElementById("cash").value,
    +document.getElementById("equipment").value,
    +document.getElementById("ip").value,
    +document.getElementById("branding").value,
    +document.getElementById("webAssets").value,
    +document.getElementById("receivables").value
  ];
  const liabilities = [
    +document.getElementById("startup").value,
    +document.getElementById("payouts").value,
    +document.getElementById("licenses").value,
    +document.getElementById("financing").value,
    +document.getElementById("credit").value
  ];
  const totalAssets = assets.reduce((a, b) => a + b, 0);
  const totalLiabilities = liabilities.reduce((a, b) => a + b, 0);
  const netWorth = totalAssets - totalLiabilities;
  document.getElementById("result").innerText = `Business Net Worth: $${netWorth.toLocaleString()}`;
}
