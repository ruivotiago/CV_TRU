const findUniq = arr => {
  a = arr.sort((a, b) => a - b);
  if (a[0] === a[1]) {
    a = a[a.length - 1];
  } else {
    a = a[0];
  }
  return a;
};
console.log(findUniq([10, 3, 3, 3, 3])); //, 10);
