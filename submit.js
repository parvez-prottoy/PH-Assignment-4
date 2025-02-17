function cashOut(money) {
  if (typeof money !== "number" || money < 0) {
    return "Invalid";
  }
  return (money * 1.75) / 100;
}

function validEmail(email) {
  if (typeof email !== "string") {
    return "Invalid";
  } else if (
    ".-_+@".includes(email[0]) ||
    !email.includes("@") ||
    email.includes(" ") ||
    email.slice(-4) !== ".com"
  ) {
    return false;
  } else {
    return true;
  }
}
