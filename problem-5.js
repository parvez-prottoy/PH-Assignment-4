// Problem-05: Let’s Calculate Video watch Time

function calculateWatchTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }
  let totalSeconds = 0;
  for (const time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    }
    totalSeconds += time;
  }
  let hour = Math.floor(totalSeconds / 3600);
  let minute = Math.floor((totalSeconds % 3600) / 60);
  let second = totalSeconds % 60;
  return { hour, minute, second };
}
console.log(calculateWatchTime([100, 3800, "90"]));
