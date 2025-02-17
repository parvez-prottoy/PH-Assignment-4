// Problem-01 : Calculate the cash-out Charge

function cashOut(money) {
  if (typeof money !== "number" || money < 0) {
    return "Invalid";
  }
  return (money * 1.75) / 100;
}
console.log(cashOut(100));
