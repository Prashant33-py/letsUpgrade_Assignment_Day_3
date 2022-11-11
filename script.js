var arr = [];
for (let i = 0; i < 5; i++) {
  let num = prompt(`Enter a number (${5 - i} remaining)`);
  num = Number.parseInt(num);
  arr.push(num);
}
var max = arr[0];
arr.forEach((elem) => {
  if (elem > max) {
    max = elem;
  }
});

alert(`The largest number from ${arr} is ${max}`);
