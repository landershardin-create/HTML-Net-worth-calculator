function calculateNetWorth() {
  const assets = [
    +document.getElementById("cash").value,
    +document.getElementById("investments").value,
    +document.getElementById("realEstate").value,
    +document.getElementById("businessEquity").value,
    +document.getElementById("brandingAssets").value
  ];
  const liabilities = [
    +document.getElementById("mortgage").value,
    +document.getElementById("creditCard").value,
    +document.getElementById("businessDebt").value
  ];
  const totalAssets = assets.reduce((a, b) => a + b, 0);
  const totalLiabilities = liabilities.reduce((a, b) => a + b, 0);
  const netWorth = totalAssets - totalLiabilities;
  document.getElementById("result").innerText = `Net Worth: $${netWorth.toLocaleString()}`;
}
