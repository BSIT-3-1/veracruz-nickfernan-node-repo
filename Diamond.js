let n = 6;
let str = "";

for (let i = 0; i <= n; i++) {
  for (let y = n; y > i; y--) {
    str += " ";
  }
 
  for (let k = 1; k < i * 2; k++) {
    str += "*";
  }
  str += "\n";
}

for (let i = 1; i <= n - 1; i++) {
  
  for (let y = 0; y < i; y++) {
    str += " ";
  }
 
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    str += "*";
  }
  str += "\n";
}
console.log(str);