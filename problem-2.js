// Problem-02 : Detect email  valid or not

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
console.log(validEmail("he ro@alom.com"));
