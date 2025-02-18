// Problem-04: Detect The Perfect Best Friend

function isBestFriend(f1, f2) {
  const objectKeys = "name,roll,bestFriend";
  if (
    typeof f1 !== "object" ||
    typeof f2 !== "object" ||
    Object.keys(f1).toString() !== objectKeys ||
    Object.keys(f2).toString() !== objectKeys
  ) {
    return "Invalid";
  }
  const isBestFriend1 = f1.roll === f2.bestFriend ? true : false;
  const isBestFriend2 = f2.roll === f1.bestFriend ? true : false;
  return isBestFriend1 && isBestFriend2 ? true : false;
}
console.log(
  isBestFriend(
    { name: "hashem", roll: 1, bestFriend: 1 },
    { name: "kashem", roll: 1, bestFriend: 1 }
  )
);
