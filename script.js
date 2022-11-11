let arr = [];
for (let i = 0; i < 5; i++) {
  let num = prompt("Enter a number");
  arr.push(num);
}
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
alert(`The largest number from ${arr} is ${max}`);
