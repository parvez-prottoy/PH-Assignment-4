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

function electionResult(votes) {
  if (!Array.isArray(votes) || typeof votes === "undefined") {
    return "Invalid";
  }
  let mongoCount = 0;
  let bananaCount = 0;
  for (const vote of votes) {
    if (typeof vote !== "string") {
      return "Invalid";
    } else {
      if (vote === "mango") {
        mongoCount++;
      } else if (vote === "banana") {
        bananaCount++;
      }
    }
  }
  if (mongoCount > bananaCount) {
    return "Mango";
  } else if (bananaCount > mongoCount) {
    return "Banana";
  } else if (mongoCount === bananaCount) {
    return "Draw";
  }
}

function isBestFriend(f1, f2) {
  const objectKeys = ["name", "roll", "bestFriend"];
  if (
    (typeof f1 !== "object" || typeof f2 !== "object") &&
    (Object.keys(f1) !== objectKeys || Object.keys(f2) !== objectKeys)
  ) {
    return "Invalid";
  }
  const isBestFriend1 = f1.roll === f2.bestFriend ? true : false;
  const isBestFriend2 = f2.roll === f1.bestFriend ? true : false;
  return isBestFriend1 && isBestFriend2 ? true : false;
}
