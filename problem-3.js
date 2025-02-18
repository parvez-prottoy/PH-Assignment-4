// Problem-03 : Who will Win  ( 🥭Mango /🍌 Banana )

function electionResult(votes) {
  if (!Array.isArray(votes) || typeof votes === "undefined") {
    return "Invalid";
  }
  let mongoCount = 0;
  let bananaCount = 0;
  for (const vote of votes) {
    if (typeof vote !== "string") {
      return "Invalid";
    } else if (vote === "mango") {
      mongoCount++;
    } else if (vote === "banana") {
      bananaCount++;
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
console.log(electionResult(["mango", "BananA", "na vote", true]));
