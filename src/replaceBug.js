/*
A string `string` is given. Remove any occurrence of 'bug' by 'flower'. Attention: 'bug' can occur several times in the string.
*/

export default function replaceBug(string) {
  // return string.replaceAll("bug", "flower");
  // return solWSplice(string);
  return solWOBuiltInFuncs(string);
}

// solution with splice: arr - splice - str
function solWSplice(string, find = "bug", replace = "flower") {
  const arr = [...string];
  for (let i = 0; i < string.length; i++) {
    if (arr[i] === find[0] && [...arr].splice(i, find.length).join("") === find)
      arr.splice(i, find.length, replace);
  }
  return arr.join("");
}

//solution without built-in functions
function solWOBuiltInFuncs(string, find = "bug", replace = "flower") {
  let replacedArr = [];
  for (let i = 0; i < string.length; i++) {
    if (detect(string, i, find)) {
      replacedArr.push("flower");
      i += find.length - 1;
    } else replacedArr.push(string[i]);
  }
  return replacedArr.join("");
}

function detect(string, i, find) {
  for (let j = i; j < i + find.length; j++) {
    if (string[j] !== find[j - i]) return false;
  }
  return true;
}
